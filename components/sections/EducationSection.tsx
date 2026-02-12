"use client";

import React, { useEffect, useState } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";

import { FadeIn } from "../animations/FadeIn";
import { AuroraText } from "../ui/AuroraText";

import { supabase } from "@/config/supabase";
import { CustomCard } from "@/components/ui/CustomCard";
import { EducationEntry } from "@/types/database";

export const EducationSection = () => {
  const [educationData, setEducationData] = useState<EducationEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<EducationEntry | null>(null);

  useEffect(() => {
    const fetchEducation = async () => {
      const { data, error } = await supabase
        .from("education")
        .select("*")
        .order("id", { ascending: true });

      if (!error) setEducationData(data || []);
      setLoading(false);
    };

    fetchEducation();
  }, []);

  if (loading)
    return (
      <div className="py-20 text-center text-default-500 italic">
        Carregando formação...
      </div>
    );

  const getImageUrl = (certificate_path: string): string => {
    const { data } = supabase.storage
      .from("Certificates")
      .getPublicUrl(certificate_path);

    return data.publicUrl;
  };

  return (
    <section className="py-20 border-t border-default-100" id="education">
      <div className="container mx-auto px-6">
        <FadeIn direction="up">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 tracking-tighter uppercase inline-block border-b-2 border-primary pb-2r">
            <AuroraText>Formação & Certificações</AuroraText>
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08} direction="up">
              <CustomCard
                badge={{
                  label: item.type,
                  variant: item.type.toLowerCase().includes("graduação")
                    ? "primary"
                    : "default",
                }}
                footerIcon={Calendar}
                footerText={item.period}
                icon={GraduationCap}
                isClickable={!!item.certificate_path}
                subtitle={item.institution}
                title={item.degree}
                onClick={() => item.certificate_path && setSelectedItem(item)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
      {selectedItem && (
        <Modal
          backdrop="opaque"
          classNames={{
            base: "bg-[#0a0a0a] border border-white/10",
          }}
          isOpen={!!selectedItem}
          size="4xl"
          onOpenChange={() => setSelectedItem(null)}
        >
          <ModalContent>
            <>
              <ModalHeader>
                <h2 className="text-xl font-bold text-white">
                  {selectedItem.degree}
                </h2>
              </ModalHeader>

              <ModalBody className="flex justify-center p-6">
                {selectedItem.certificate_path && (
                  <img
                    alt={selectedItem.degree}
                    className="max-h-[70vh] object-contain rounded-md"
                    src={getImageUrl(selectedItem.certificate_path)}
                  />
                )}
              </ModalBody>
            </>
          </ModalContent>
        </Modal>
      )}
    </section>
  );
};
