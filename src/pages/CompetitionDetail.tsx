import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { COMPETITIONS } from "@/data/constants";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Calendar, Users, Trophy, FileText } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompetitionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const competition = COMPETITIONS.find((c) => c.id === id);

  if (!competition) {
    return (
      <Layout>
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Competition Not Found</h1>
          <Button onClick={() => navigate("/competitions")}>Back to Competitions</Button>
        </div>
      </Layout>
    );
  }

  const eligibility = Array.isArray(competition.eligibility)
    ? competition.eligibility
    : competition.eligibility
      ? [competition.eligibility]
      : [];

  const rounds = competition.rounds ?? [];
  const submission = competition.submission ?? [];
  const judgingCriteria = competition.judgingCriteria ?? [];
  const evaluationCriteria = competition.evaluationCriteria ?? [];
  const toolsAllowed = competition.toolsAllowed ?? [];
  const constraints = competition.constraints ?? [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-background">

        {competition.bannerImage ? (
          <>
            <motion.img 
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 0.8 }}
              src={competition.bannerImage}
              alt="Competition Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Blend gradients for the banner */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
          </>
        )}

        <motion.button
          onClick={() => navigate("/competitions")}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 hover:bg-background/95 backdrop-blur-sm transition-all border border-white/10"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} />
          Back
        </motion.button>

        {/* Title Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-2 text-gradient">
            {competition.name}
          </h1>
          <p className="text-muted-foreground text-lg">{competition.tagline}</p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Info Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass rounded-xl p-4 text-center">
              <Users size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground mb-1">Team Size</p>
              <p className="font-semibold text-sm">{competition.teamSize}</p>
            </div>

            <div className="glass rounded-xl p-4 text-center">
              <Trophy size={24} className="mx-auto mb-2 text-secondary" />
              <p className="text-xs text-muted-foreground mb-1">Prize Pool</p>
              <p className="font-semibold text-sm">{competition.prizePool.split("+")[0].trim()}</p>
            </div>

            <div className="glass rounded-xl p-4 text-center">
              <Calendar size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground mb-1">Deadline</p>
              <p className="font-semibold text-sm">{competition.deadline}</p>
            </div>

            <div className="glass rounded-xl p-4 text-center">
              <FileText size={24} className="mx-auto mb-2 text-secondary" />
              <p className="text-xs text-muted-foreground mb-1">Rulebook</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-semibold text-xs text-primary hover:text-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!competition.rulebookLink}
                onClick={() => {
                  if (competition.rulebookLink) {
                    window.open(competition.rulebookLink, "_blank");
                  }
                }}
              >
                Check
              </motion.button>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="rules">Rules</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">About This Competition</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {competition.description}
                  </p>

                  <h3 className="text-xl font-heading font-semibold mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {(competition.keyFeatures ?? []).map((feature, i) => (
                      <motion.div
                        key={i}
                        className="glass rounded-lg p-4 flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm">{feature}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 glass rounded-xl border-l-4 border-primary">
                    <h4 className="font-heading font-semibold mb-2">Prizes & Recognition</h4>
                    <p className="text-md">{competition.prizePool}</p>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Rules Tab */}
              <TabsContent value="rules" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Structure & Guidelines</h2>

                  {competition.rulesDescription && (
                    <section className="mb-8">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                        {competition.rulesDescription}
                      </p>
                    </section>
                  )}

                  <div className="space-y-6 mb-8">
                    {eligibility.length > 0 && (
                      <section>
                        <h3 className="text-xl font-heading font-semibold mb-3">Eligibility</h3>
                        <div className="space-y-3">
                          {eligibility.map((item, i) => (
                            <motion.div
                              key={i}
                              className="glass rounded-lg p-4 flex gap-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + i * 0.05 }}
                            >
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary font-semibold text-sm">
                                  {i + 1}
                                </div>
                              </div>
                              <p className="text-sm md:text-base pt-1">{item}</p>
                            </motion.div>
                          ))}
                        </div>
                      </section>
                    )}

                    {rounds.length > 0 && (
                      <section>
                        <h3 className="text-xl font-heading font-semibold mb-3">Rounds</h3>
                        <div className="space-y-3">
                          {rounds.map((round, i) => (
                            <motion.div
                              key={i}
                              className="glass rounded-lg p-4 flex gap-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + i * 0.05 }}
                            >
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary/20 text-secondary font-semibold text-sm">
                                  {i + 1}
                                </div>
                              </div>
                              <p className="text-sm md:text-base pt-1">{round}</p>
                            </motion.div>
                          ))}
                        </div>
                      </section>
                    )}

                    {submission.length > 0 && (
                      <section>
                        <h3 className="text-xl font-heading font-semibold mb-3">Submission Requirements</h3>
                        <ul className="space-y-2 list-disc list-inside text-sm md:text-base text-muted-foreground">
                          {submission.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {(judgingCriteria.length > 0 || evaluationCriteria.length > 0) && (
                      <section>
                        <h3 className="text-xl font-heading font-semibold mb-3">Evaluation Criteria</h3>
                        <ul className="space-y-2 list-disc list-inside text-sm md:text-base text-muted-foreground">
                          {judgingCriteria.map((item, i) => (
                            <li key={`judge-${i}`}>{item}</li>
                          ))}
                          {evaluationCriteria.map((item, i) => (
                            <li key={`eval-${i}`}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {toolsAllowed.length > 0 && (
                      <section>
                        <h3 className="text-xl font-heading font-semibold mb-3">Tools / Platforms Allowed</h3>
                        <div className="flex flex-wrap gap-2">
                          {toolsAllowed.map((tool, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-xs md:text-sm bg-primary/10 text-primary border border-primary/20"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </section>
                    )}

                    {constraints.length > 0 && (
                      <section>
                        <h3 className="text-xl font-heading font-semibold mb-3">Additional Constraints</h3>
                        <ul className="space-y-2 list-disc list-inside text-sm md:text-base text-muted-foreground">
                          {constraints.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>

                  <motion.div
                    className="p-6 glass rounded-xl border border-yellow-500/30 bg-yellow-500/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-sm text-yellow-200">
                      ⚠️ Note: Violation of any rule may lead to disqualification. Detailed rulebooks and updates will be shared with registered participants via email.
                    </p>
                  </motion.div>

                  <motion.div
                    className="mt-8 flex gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      disabled={!competition.rulebookLink}
                      onClick={() => {
                        if (competition.rulebookLink) {
                          window.open(competition.rulebookLink, "_blank");
                        }
                      }}
                    >
                      <FileText size={18} />
                      Check Rulebook
                    </Button>
                  </motion.div>
                </motion.div>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-2xl"
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Register Now</h2>
                  <p className="text-muted-foreground mb-8">
                    Secure your spot in {competition.name}.
                  </p>

                  {competition.registrationLink ? (
                    <Button
                      size="lg"
                      className="w-full sm:w-auto"
                      onClick={() => window.open(competition.registrationLink, "_blank")}
                    >
                      Register Now
                    </Button>
                  ) : (
                    <RegistrationForm competition={competition} />
                  )}
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CompetitionDetail;
