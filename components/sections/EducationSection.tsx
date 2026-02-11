"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/config/supabase";
import { FadeIn } from "../animations/FadeIn";
import { EducationCard, EducationItem } from "../education-card";

export const EducationSection = () => {
  const [educationData, setEducationData] = useState<EducationItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      const { data, error } = await supabase
        .from("education")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Erro ao buscar educação:", error);
      } else {
        setEducationData(data || []);
      }
      setLoading(false);
      if (error) {
        console.error("Erro ao buscar educação:", error);
      } else {
        console.log("Dados recebidos:", data); 
        console.log("Tamanho do array:", data?.length);
        setEducationData(data || []);
      }
    };

    fetchEducation();
  }, []);

  if (loading)
    return <div className="py-20 text-center">Carregando formação...</div>;

  return (
    <section id="educacao" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn direction="up">
          <h2 className="text-4xl font-bold mb-12 tracking-tighter uppercase">
            Formação & Qualificações
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <EducationCard {...item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
