import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce modern yang memudahkan seseorang dalam berbelanja online dan mendapatkan harga yang terjangkau.",
    tags: ["Shopee", "Lazada", "TikTok Shop", "Tokopedia"],
    image: "🛒",
    color: "from-blue-500/20 to-cyan-500/20",
    github: "https://github.com/keenan09-gif/opet-kocak.git",
    demo: "#",
  },
  {
    title: "Learning Management Platform",
    description:
      "Platform pembelajaran online dengan video streaming, quiz interaktif, dan soal-soal.",
    tags: ["Duolingo", "Ruang Guru", "Zenius", "Quipper"],
    image: "📚",
    color: "from-purple-500/20 to-pink-500/20",
    github: "https://github.com/keenan09-gif/opet-kocak.git",
    demo: "#",
  },
  {
    title: "Social Media Platform",
    description: "Platform untuk bersosial media dan sharing.",
    tags: ["WhatsApp", "Instagram", "TikTok", "Facebook"],
    image: "📱",
    color: "from-orange-500/20 to-red-500/20",
    github: "https://github.com/keenan09-gif/opet-kocak.git",
    demo: "#",
  },
  {
    title: "AI Platform",
    description: "Situs berbasis AI untuk mencari informasi.",
    tags: ["ChatGPT", "Google", "Gemini", "Meta AI"],
    image: "🤖",
    color: "from-green-500/20 to-teal-500/20",
    github: "https://github.com/keenan09-gif/opet-kocak.git",
    demo: "#",
  },
  {
    title: "Video Editing Tutorial",
    description: "Tutorial video untuk mempermudah tugas.",
    tags: ["TikTok", "Instagram", "YouTube"],
    image: "🎬",
    color: "from-red-500/20 to-orange-500/20",
    isContent: true,
    youtube: "#",
  },
  {
    title: "Coding Tips & Tricks",
    description: "Konten tips programming.",
    tags: ["Instagram", "TikTok", "YouTube Shorts"],
    image: "💡",
    color: "from-cyan-500/20 to-blue-500/20",
    isContent: true,
    youtube: "#",
  },
];

// 🔥 parent animation (stagger)
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// 🔥 card animation
const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium block mb-2">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Projects & Karya
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300">

                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}
                >
                  <motion.span
                    className="text-6xl"
                    whileHover={{ rotate: 10, scale: 1.2 }}
                  >
                    {project.image}
                  </motion.span>
                </motion.div>

                {/* CONTENT */}
                <div className="space-y-3">

                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                        Content
                      </span>
                    )}

                    <h3 className="text-lg font-bold group-hover:text-primary transition">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* TAG */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github}>

                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}

                    {project.youtube && (
                      <Button size="sm" asChild>
                        <a href={project.youtube}>
                          <Play className="h-4 w-4 mr-1" />
                          Watch
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}