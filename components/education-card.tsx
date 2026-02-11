"use client";

import React from "react";
import {
  Card,
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Image,
} from "@heroui/react";
import { SUPABASE_CERT_BASE } from "@/config/certificates";
import { HoverScale } from "./animations/HoverScale";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  type: "academic" | "course";
  certificate_path?: string;
}

export const EducationCard: React.FC<EducationItem> = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const certificateUrl = props.certificate_path
    ? `${SUPABASE_CERT_BASE}/${props.certificate_path}`
    : null;

  return (
    <>
      <HoverScale className="h-full">
        <Card
          isPressable
          onPress={onOpen}
          className="w-full h-full border border-default-100 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all"
        >
          <CardBody className="p-6 flex flex-col min-h-[220px] w-full">
            <div className="flex justify-between items-start w-full mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {props.type === "academic" ? (
                  <GraduationCap size={24} />
                ) : (
                  <BookOpen size={24} />
                )}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-default-400 bg-default-100/50 px-2 py-1 rounded">
                {props.type === "academic" ? "Graduação" : "Certificado"}
              </span>
            </div>

            {/* Conteúdo Central */}
            <div className="flex-grow flex flex-col justify-center w-full">
              <h3 className="text-xl font-bold leading-tight mb-1 text-white">
                {props.degree}
              </h3>
              <p className="text-default-500 font-medium">
                {props.institution}
              </p>
            </div>

            {/* Rodapé */}
            <div className="mt-4 pt-4 border-t border-default-100/50 w-full">
              <div className="flex items-center gap-2 text-default-400 text-xs">
                <Calendar size={14} />
                <span>{props.period}</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </HoverScale>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        backdrop="blur"
        scrollBehavior="inside"
        classNames={{
          base: "max-h-[90vh]",
          body: "p-0",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b border-default-100">
                {props.degree}
                <span className="text-sm font-normal text-default-500">
                  {props.institution}
                </span>
              </ModalHeader>
              <ModalBody className="flex items-center justify-center bg-black/5 p-4">
                {certificateUrl ? (
                  <Image
                    src={certificateUrl}
                    alt={props.degree}
                    className="w-full h-auto max-h-[70vh] object-contain shadow-lg"
                    radius="sm"
                  />
                ) : (
                  <div className="py-20 text-default-400 italic">
                    Visualização do certificado indisponível.
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
