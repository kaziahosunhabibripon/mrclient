import Container from "@/pages/Shared/Container";
import React from "react";
import FooterTop from "@/components/Shared/Footer/FooterTop";
import FooterBottom from "@/components/Shared/Footer/FooterBottom";

const Footer = () => {
  return (
    <div className="py-[32px] font-montserrat bg-[#0C0C0C]">
      <Container className="text-white">
        <FooterTop />
        <FooterBottom />
      </Container>
    </div>
  );
};

export default Footer;
