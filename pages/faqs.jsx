import GardenAccordion from "@/src/components/GardenAccordion";
import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const Faqs = () => {
  const faqsData1 = [
    {
      title: "What services does Bloomwise Gardens offer?",
      description:
        "Bloomwise Gardens provides a range of services, including expert landscape design, plant care, soil analysis, irrigation system installation, garden consultations, and sustainable gardening practices.",
    },
    {
      title: "How much does your services cost?",
      description:
        "The cost varies depending on the scope of the project. We offer competitive pricing tailored to your needs, ensuring a balance between affordability and quality.",
    },
    {
      title: "How often should I schedule maintenance for my garden?",
      description:
        "The frequency of maintenance depends on factors like the size of your garden and the specific plants. We recommend regular visits for optimal plant health, typically quarterly or seasonally.",
    },
    {
      title: "Can you work with a specific budget for my garden project?",
      description:
        "Absolutely! We understand the importance of budget considerations. Our team will work with you to create a plan that aligns with your financial goals while delivering exceptional results.",
    },
    {
      title: "Do you offer sustainable gardening options?",
      description:
        "Yes, sustainability is a key focus. We provide eco-friendly solutions, including native plant recommendations, water-efficient designs, and organic gardening practices.",
    },
  ];
  const faqsData2 = [
    {
      title: "Can Bloomwise Gardens help with redesigning an existing garden?",
      description:
        "Certainly! We specialize in garden redesigns. Our team will work with you to enhance your current space, incorporating new elements or reimagining the layout to meet your preferences.",
    },
    {
      title: "How do I schedule a garden consultation?",
      description:
        "Scheduling a consultation is easy. Simply contact us through our website or give us a call. We'll arrange a convenient time to discuss your goals and assess your garden.",
    },
    {
      title: "What sets Bloomwise Gardens apart from other gardening services?",
      description:
        "Our commitment to personalized service, sustainable practices, and a deep understanding of horticulture sets us apart. We prioritize your unique needs to create a garden that reflects your style and thrives.",
    },
    {
      title: "Can you provide references or examples of your past work?",
      description:
        "Certainly! We're proud of our portfolio. Feel free to ask for references or view examples of our past projects to gain confidence in our capabilities.",
    },
    {
      title: "Is Bloomwise Gardens licensed and insured?",
      description:
        "Yes, Bloomwise Gardens is fully licensed and insured. Our team of professionals adheres to industry standards, ensuring that your project is in capable and secure hands.",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner pageName={"Frequently Asked Questions"} />
      <section className="faq-section pt-95">
        <div className="container">
          <Accordion
            defaultActiveKey="collapse0"
            className="accordion"
            id="accordionOne"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-content-box wow fadeInLeft">
                  {faqsData1.map((faq, i) => (
                    <GardenAccordion
                      title={faq.title}
                      key={i}
                      description={faq.description}
                      event={`collapse${i}`}
                      onClick={() => setActive(`collapse${i}`)}
                      active={active}
                    />
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content-box wow fadeInRight">
                  {faqsData2.map((faq, i) => (
                    <GardenAccordion
                      title={faq.title}
                      key={i}
                      description={faq.description}
                      event={`collapseB${i}`}
                      onClick={() => setActive(`collapse${i}`)}
                      active={active}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </section>
      <section className="info-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="single-info-item style-one mb-40 wow fadeInUp">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-1.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <h4 className="title">
                    Discover how we turn your garden dreams a reality.
                  </h4>
                  <Link legacyBehavior href="/about">
                    <a className="main-btn golden-btn">About Us</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-info-item style-two mb-40 wow fadeInDown">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-1.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <h4 className="title">
                    Check from out services to see what suits your needs.
                  </h4>
                  <Link legacyBehavior href="/service">
                    <a className="main-btn golden-btn">Services</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-info-item style-three mb-40 wow fadeInUp">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-2.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <h4 className="title">
                    Consult with our specialists before you hire us
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn primary-btn">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-section pt-95 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Pricing Plans
                </span>
                <h2>Choose From Our Ranging Services</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="single-pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-1.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Home Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Weeding
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Transplanting
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Installing Irrigation System
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Maintenance (6 Months)
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>99
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>For 6 Months</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="single-pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-2.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Building Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Weeding
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Transplanting
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Installing Irrigation System
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Maintenance (12 Months)
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>299.99
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>For 12 Months</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="single-pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-3.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Company Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Weeding
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Transplanting
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Installing Irrigation System
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Maintenance (12 Months)
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>499.99
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>For 12 Months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </Layout>
  );
};
export default Faqs;
