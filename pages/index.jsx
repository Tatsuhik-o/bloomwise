import Counter from "@/src/components/Counter";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const Index3 = () => {
  return (
    <Layout>
      <section className="banner-section">
        <div className="hero-wrapper-three">
          <div className="hero-waves">
            <img src="assets/images/hero/bg-2.png" className="waves one" alt />
            <img src="assets/images/hero/bg.png" className="waves two" alt />
          </div>
          <Slider {...sliderProps.heroSliderTwo} className="hero-slider-two">
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-1.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="hero-content text-center">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Bloomwise
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Gardening
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Cultivating Beauty &amp; Nurturing Nature
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/service">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="features-section pt-95">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              <div className="section-title mb-55 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Our Services
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-6.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i class="fa-regular fa-seedling"></i>
                  </div>
                  <h5 className="title">Plant Selection</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-7.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i class="fa-regular fa-hand-scissors"></i>
                  </div>
                  <h5 className="title">Pruning</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-8.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i class="fa-regular fa-hand-holding-seedling"></i>
                  </div>
                  <h5 className="title">Soil Analysis</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-9.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i class="fa-thin fa-building-wheat"></i>
                  </div>
                  <h5 className="title">Garden Redesign</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-bg-section">
        <div
          className="about-bg bg_cover wow fadeInLeft"
          style={{ backgroundImage: "url(assets/images/bg/about-bg-1.jpg)" }}
        />
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6">
              <div className="about-two_content-box pb-80 wow fadeInRight">
                <div className="section-title">
                  <div className="section-title mb-50">
                    <span className="sub-title">
                      <i className="flaticon-plant" />
                      About Bloomwise
                    </span>
                    <h2>Transforming Gardens</h2>
                  </div>
                  <p className="mb-45">
                    Bloomwise brings expertise and passion to every garden,
                    offering tailored designs and sustainable care for a
                    vibrant, stress-free oasis right at your home.
                  </p>
                  <div className="about-inner-content d-flex justify-content-between">
                    <div className="inner-content">
                      <ul className="check-style-one mb-45">
                        <li>
                          <i className="far fa-check" />
                          Thriving garden
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Visual curb appeal
                        </li>
                      </ul>
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn primary-btn">Learn More</a>
                      </Link>
                    </div>
                    <div className="experience-box-two">
                      <h2 className="number">
                        <Counter end={17} />+
                      </h2>
                      <h6>Years Of Experience</h6>
                      <Link legacyBehavior href="/about">
                        <a className="icon-btn">
                          <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-bgc-section p-r z-1 main-bg pt-150 pb-70">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/leaf-1.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/shape/leaf-2.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-three">
          <span>
            <img src="assets/images/shape/leaf-3.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Our Services
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-agriculture" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service">
                      <a>Garden Design</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-1.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-field-1" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-field-1" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service">
                      <a>Weed Removal</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-2.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-farming" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-farming" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service">
                      <a>Soil Analysis</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-3.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".35s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-park" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-park" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service">
                      <a>Transplanting</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-4.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-rake" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-rake" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service">
                      <a>Regular Maintenance</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-5.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".45s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-growth-1" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-growth-1" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service">
                      <a>Irrigation System</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-6.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-xl-6 col-lg-12">
              <div className="skill-content-box mb-35 mr-lg-50 wow fadeInLeft">
                <div className="section-title mb-25">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    We’re Skilled At
                  </span>
                  <h2>Fresh takes &amp; Reimagined views</h2>
                </div>
                <p className="mb-30">
                  Crafting captivating landscapes, nurturing thriving gardens,
                  and delivering personalized horticultural solutions to
                  transform your outdoor space into a flourishing haven.
                </p>
                <ul className="skills-list">
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Gardening</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <span className="number">100%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Landscape</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <span className="number">100%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Maintenance</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <span className="number">100%</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="skill-two_image-box mb-20 p-r z-1 wow fadeInRight">
                <img
                  src="assets/images/skill/skill-4.jpg"
                  className="skill-img-one"
                  alt="Skill Image"
                />
                <img
                  src="assets/images/skill/skill-5.jpg"
                  className="skill-img-two"
                  alt="Skill Image"
                />
                <div className="circle-logo">
                  <div className="inner-circle">
                    <i class="fa-regular fa-bag-seedling"></i>
                    <h5>Bloomwise</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-wrapper pt-60 border-top-1">
            <div className="row align-items-center">
              <div className="col-lg-9">
                <div className="cta-content-box d-flex align-items-center mb-40 wow fadeInLeft">
                  <img
                    src="assets/images/gallery/circle-logo.png"
                    className="circle-logo"
                    alt="Circle Logo"
                  />
                  <h2>Hire An Experienced Specialist?</h2>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="cta-button float-lg-right mb-40 wow fadeInRight">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn golden-btn">Find A Specialist</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <div className="container-fluid">
          <Slider
            {...sliderProps.projectsSliderTwo}
            className="projects-slider-two wow fadeInDown"
          >
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-4.jpg" alt="Gallery Image" />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="#">
                        <a>Emily Hayes</a>
                      </Link>
                    </h3>
                    <p>Sustainable Gardener</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-5.jpg" alt="Gallery Image" />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="#">
                        <a>Brandina Foster</a>
                      </Link>
                    </h3>
                    <p>Maintenance Supervisor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-6.jpg" alt="Gallery Image" />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="#">
                        <a>Sophia Davis</a>
                      </Link>
                    </h3>
                    <p>Soil Health Analyst</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-7.jpg" alt="Gallery Image" />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="#">
                        <a>Andrew Porter</a>
                      </Link>
                    </h3>
                    <p>Irrigation System Specialist</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-8.jpg" alt="Gallery Image" />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="#">
                        <a>Daniel Harrison</a>
                      </Link>
                    </h3>
                    <p>Garden Consultation Expert</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-9.jpg" alt="Gallery Image" />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="#">
                        <a>Natalie Carter</a>
                      </Link>
                    </h3>
                    <p>Horticultural Advisor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-two">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gl-10.jpg"
                  alt="Gallery Image"
                />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="#">
                        <a>Tylor Turner</a>
                      </Link>
                    </h3>
                    <p>Plant Care Technician</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-two">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gl-11.jpg"
                  alt="Gallery Image"
                />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="#">
                        <a>Ryan Mitchell</a>
                      </Link>
                    </h3>
                    <p>Landscape Design Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
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
      <section className="testimonial-section">
        <div className="container-fluid">
          <div className="testimonial-wrapper main-bg wow fadeInDown">
            <div className="shape shape-four">
              <span>
                <img
                  src="assets/images/testimonial/tree.png"
                  alt="Tree image"
                />
              </span>
            </div>
            <div className="shape shape-five">
              <span>
                <img
                  src="assets/images/testimonial/tree2.png"
                  alt="Tree image"
                />
              </span>
            </div>
            <div className="shape shape-one">
              <span>
                <img
                  src="assets/images/testimonial/tree3.png"
                  alt="Tree image"
                />
              </span>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <Slider
                    {...sliderProps.testimonialSliderTwo}
                    className="testimonial-slider-two"
                  >
                    <div className="single-testimonial-item-two">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>Quality</h3>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Bloomwise Gardens' work is truly exceptional! Their
                        meticulous landscape design and garden care showcase a
                        commitment to unparalleled quality.
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h6 className="title">Sarah Thompson</h6>
                          <p className="position">Customer</p>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-item-two mb-60">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>Price</h3>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Bloomwise Gardens strikes a fantastic balance between
                        quality and affordability. Their services are reasonably
                        priced, making professional gardening accessible.
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-2.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h6 className="title">Alex Rodriguez</h6>
                          <p className="position">Customer</p>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-item-two mb-60">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>Service</h3>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Bloomwise Gardens provides outstanding service from
                        start to finish. The knowledgeable and friendly team's
                        dedication to customer satisfaction shines through in
                        every aspect of their work.
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-3.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h6 className="title">Jamie Mitchell</h6>
                          <p className="position">Customer</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
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
export default Index3;
