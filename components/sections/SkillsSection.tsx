"use client";

import React, { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Button, Spinner } from "@heroui/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import { FadeIn } from "../animations/FadeIn";

import { createClient } from "@/utils/supabase/client";
import { AuroraText } from "@/components/ui/AuroraText";

const SkillCarousel = dynamic(
  () =>
    import("@/components/ui/SkillCarousel").then((mod) => mod.SkillCarousel),
  { ssr: false },
);

const supabase = createClient();

export const SkillsSection = () => {
  const [skillGroups, setSkillGroups] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      setLoading(true);

      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("group_id", { ascending: true });

      if (error) {
        console.error("Erro ao buscar skills:", error);
        setLoading(false);

        return;
      }

      if (data) {
        const groupedMap = new Map<number, any[]>();

        data.forEach((item) => {
          if (!groupedMap.has(item.group_id)) {
            groupedMap.set(item.group_id, []);
          }
          groupedMap.get(item.group_id)!.push(item);
        });

        const grouped = Array.from(groupedMap.entries()).map(
          ([id, skills]) => ({ id, skills }),
        );

        setSkillGroups(grouped);
      }

      setLoading(false);
    }

    fetchSkills();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || skillGroups.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % skillGroups.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, skillGroups.length]);

  const next = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % skillGroups.length);
    setIsAutoPlaying(false);
  }, [skillGroups.length]);

  const prev = useCallback(() => {
    setCurrentPage(
      (prev) => (prev - 1 + skillGroups.length) % skillGroups.length,
    );
    setIsAutoPlaying(false);
  }, [skillGroups.length]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev);
  }, []);

  return (
    <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-transparent from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
        <FadeIn direction="up">
          <div className="flex flex-col items-center text-center gap-2 mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              <AuroraText>Tecnologias</AuroraText>
            </h2>

            <p className="text-default-400 text-sm sm:text-base max-w-xl sm:max-w-2xl">
              Ferramentas e tecnologias que domino
            </p>

            {!loading && skillGroups.length > 1 && (
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-default-400 font-medium">
                  {currentPage + 1} / {skillGroups.length}
                </span>

                <Button
                  isIconOnly
                  className="text-default-400 hover:text-primary transition-colors"
                  size="sm"
                  variant="light"
                  onPress={toggleAutoPlay}
                >
                  {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                </Button>
              </div>
            )}
          </div>
        </FadeIn>

        <div className="relative">
          {/* Botão esquerdo desktop */}
          {!loading && skillGroups.length > 1 && (
            <Button
              isIconOnly
              className="absolute left-2 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-10 bg-content1/30 hover:bg-primary/20 border border-white/5 hidden sm:flex"
              radius="full"
              size="lg"
              variant="flat"
              onPress={prev}
            >
              <ChevronLeft size={22} />
            </Button>
          )}

          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="flex flex-col justify-center items-center min-h-[240px] sm:min-h-[280px] gap-4">
                <Spinner color="primary" size="lg" />
                <p className="text-sm text-default-400">
                  Carregando tecnologias...
                </p>
              </div>
            ) : skillGroups.length === 0 ? (
              <div className="flex justify-center items-center min-h-[240px] sm:min-h-[280px]">
                <p className="text-default-400">Nenhuma skill encontrada.</p>
              </div>
            ) : (
              <SkillCarousel
                pageIndex={currentPage}
                skills={skillGroups[currentPage]?.skills}
              />
            )}
          </div>

          {/* Botão direito desktop */}
          {!loading && skillGroups.length > 1 && (
            <Button
              isIconOnly
              className="absolute right-2 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 bg-content1/30 hover:bg-primary/20 border border-white/5 hidden sm:flex"
              radius="full"
              size="lg"
              variant="flat"
              onPress={next}
            >
              <ChevronRight size={22} />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
