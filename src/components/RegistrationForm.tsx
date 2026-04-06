import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, CheckCircle } from "lucide-react";

interface RegistrationFormProps {
  competition: {
    id: string;
    title: string;
    teamSize: string;
  };
}

interface FormData {
  leaderName: string;
  leaderEmail: string;
  leaderPhone: string;
  collegeName: string;
  teamMembers: string[];
  teamName: string;
  message: string;
}

interface TeamMember {
  name: string;
  email: string;
  phone: string;
}

const RegistrationForm = ({ competition }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const teamSize = parseInt(competition.teamSize.match(/\d+/)?.[0] || "2");
  
  const [formData, setFormData] = useState<FormData>({
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    collegeName: "",
    teamMembers: Array(Math.max(teamSize - 1, 0)).fill(""),
    teamName: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTeamMemberChange = (index: number, value: string) => {
    const newMembers = [...formData.teamMembers];
    newMembers[index] = value;
    setFormData((prev) => ({
      ...prev,
      teamMembers: newMembers,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (!formData.leaderName || !formData.leaderEmail || !formData.leaderPhone || !formData.collegeName || !formData.teamName) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.leaderEmail)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.leaderPhone.replace(/\D/g, ""))) {
      toast({
        title: "Error",
        description: "Please enter a valid 10-digit Indian phone number",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      // Send email to backend (you'll need to set up your backend endpoint)
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          competitionId: competition.id,
          competitionTitle: competition.title,
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "Success!",
          description: `Your team has been registered for ${competition.title}. Check your email for confirmation.`,
        });
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </motion.div>
        
        <h3 className="text-2xl font-heading font-bold mb-2">Registration Successful!</h3>
        <p className="text-muted-foreground mb-6">
          Your team has been registered for <span className="text-primary font-semibold">{competition.title}</span>
        </p>
        
        <div className="glass rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
          <h4 className="font-semibold mb-3">What's next?</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ Confirmation email sent to {formData.leaderEmail}</li>
            <li>✓ Check email for further instructions</li>
            <li>✓ Join our Discord community for updates</li>
            <li>✓ Mark the deadline: {new Date().toLocaleDateString()}</li>
          </ul>
        </div>

        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mb-3"
        >
          Register Another Team
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Leader Information */}
      <motion.div
        className="glass rounded-xl p-6 space-y-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="font-heading font-semibold text-lg">Team Leader Information</h3>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Team Leader Name *</label>
          <Input
            type="text"
            name="leaderName"
            placeholder="Enter your full name"
            value={formData.leaderName}
            onChange={handleInputChange}
            className="w-full"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Email Address *</label>
            <Input
              type="email"
              name="leaderEmail"
              placeholder="your@email.com"
              value={formData.leaderEmail}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Phone Number *</label>
            <Input
              type="tel"
              name="leaderPhone"
              placeholder="10-digit phone number"
              value={formData.leaderPhone}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">College/University Name *</label>
          <Input
            type="text"
            name="collegeName"
            placeholder="Enter your college name"
            value={formData.collegeName}
            onChange={handleInputChange}
            className="w-full"
            required
          />
        </div>
      </motion.div>

      {/* Team Information */}
      <motion.div
        className="glass rounded-xl p-6 space-y-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="font-heading font-semibold text-lg">Team Information</h3>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Team Name *</label>
          <Input
            type="text"
            name="teamName"
            placeholder="Enter your team name"
            value={formData.teamName}
            onChange={handleInputChange}
            className="w-full"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-3 block">
            Additional Team Members ({formData.teamMembers.length}/{formData.teamMembers.length})
          </label>
          <div className="space-y-3">
            {formData.teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <Input
                  type="text"
                  placeholder={`Team Member ${index + 2} Name`}
                  value={member}
                  onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                  className="w-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Additional Information */}
      <motion.div
        className="glass rounded-xl p-6 space-y-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="font-heading font-semibold text-lg">Additional Information</h3>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Why do you want to participate?</label>
          <Textarea
            name="message"
            placeholder="Tell us about your team's motivation and goals..."
            value={formData.message}
            onChange={handleInputChange}
            className="w-full min-h-24"
          />
        </div>

        <div className="glass rounded-lg p-4 bg-blue-500/5 border border-blue-500/20">
          <p className="text-xs text-muted-foreground">
            ✓ By registering, you agree to our terms and conditions and confirm that all information provided is accurate.
          </p>
        </div>
      </motion.div>

      {/* Submit Button */}
      <motion.div
        className="flex gap-4 justify-center md:justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 gap-2"
        >
          {isLoading ? (
            <>Loading...</>
          ) : (
            <>
              <Send size={18} />
              Submit Registration
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default RegistrationForm;
