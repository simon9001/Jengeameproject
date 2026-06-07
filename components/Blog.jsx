"use client";
import React, { memo, useState, useCallback } from "react";
import { BookOpen, Calendar, Clock, User, ArrowRight, ArrowLeft, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BLOG_POSTS } from "@/lib/data";
import { Button } from "./ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const BlogCard = memo(({ post, onSelect }) => (
  <motion.div
    variants={itemVariants}
    className="skeu-card p-6 flex flex-col h-full cursor-pointer group"
    onClick={() => onSelect(post)}
  >
    <span className="skeu-badge inline-block px-3 py-1 rounded-full text-xs mb-3 w-fit">
      {post.category}
    </span>

    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
      {post.title}
    </h3>

    <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
      {post.excerpt}
    </p>

    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
      <span className="flex items-center gap-1">
        <Calendar className="w-3.5 h-3.5" />
        {formatDate(post.date)}
      </span>
      <span className="flex items-center gap-1">
        <Clock className="w-3.5 h-3.5" />
        {post.readTime}
      </span>
      <span className="flex items-center gap-1">
        <User className="w-3.5 h-3.5" />
        {post.author}
      </span>
    </div>

    <div className="flex flex-wrap gap-2 mt-auto">
      {post.tags.slice(0, 3).map((tag) => (
        <span key={tag} className="skeu-tag px-2 py-0.5 rounded-full text-[10px]">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
));
BlogCard.displayName = "BlogCard";

const BlogDetail = memo(({ post, onBack }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="w-full max-w-3xl mx-auto"
  >
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-6 group"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      Back to all posts
    </button>

    <article className="skeu-card p-8 sm:p-10">
      <span className="skeu-badge inline-block px-3 py-1 rounded-full text-xs mb-4">
        {post.category}
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 leading-tight">
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border/40">
        <span className="flex items-center gap-1.5">
          <User className="w-4 h-4" />
          {post.author}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          {formatDate(post.date)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </span>
      </div>

      <div className="space-y-5">
        {post.content.map((paragraph, i) => (
          <p key={i} className="text-base text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border/40">
        <Tag className="w-4 h-4 text-primary mt-0.5" />
        {post.tags.map((tag) => (
          <span key={tag} className="skeu-tag px-3 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
    </article>
  </motion.div>
));
BlogDetail.displayName = "BlogDetail";

export default memo(function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSelect = useCallback((post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBack = useCallback(() => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-start px-4 py-12">
      <AnimatePresence mode="wait">
        {selectedPost ? (
          <BlogDetail key={selectedPost.id} post={selectedPost} onBack={handleBack} />
        ) : (
          <motion.div
            key="blog-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center w-full max-w-6xl"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full skeu-badge mb-4">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">Insights</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                Our Blog
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Tips, tutorials, and insights from our team on web development, mobile apps, backend engineering, and the tech industry.
              </p>
            </motion.div>

            {BLOG_POSTS.length > 0 ? (
              <motion.div
                variants={containerVariants}
                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {BLOG_POSTS.map((post) => (
                  <BlogCard key={post.id} post={post} onSelect={handleSelect} />
                ))}
              </motion.div>
            ) : (
              <motion.div variants={itemVariants} className="text-center py-16">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  No blog posts yet. Check back soon!
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
