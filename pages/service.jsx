import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Service = () => {
  return (
    <Layout>
      <PageBanner pageName={"Service"} />
      <section className="features-section pt-95">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-md-12">
              <div className="features-content-box p-r z-2 mb-20">
                <div className="section-title mb-50 wow fadeInDown">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    What We Offer for your Garden
                  </span>
                  <h2>Meticulous plant care & Horticultural solutions</h2>
                </div>
                <div className="features-item-area">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                        <div className="shape icon-shape">
                          <i className="flaticon-landscape-1" />
                        </div>
                        <div className="icon">
                          <i class="fa-regular fa-seedling"></i>
                        </div>
                        <div className="text">
                          <h5 className="title">Plant Selection</h5>
                          <p>
                            Expertly selecting plants for optimal garden
                            aesthetics and vitality.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInDown">
                        <div className="shape icon-shape">
                          <i className="flaticon-spider-plant" />
                        </div>
                        <div className="icon">
                          <i class="fa-regular fa-hand-scissors"></i>
                        </div>
                        <div className="text">
                          <h5 className="title">Pruning</h5>
                          <p>
                            Sculpting green perfection through precise and
                            strategic pruning.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                        <div className="shape icon-shape">
                          <i className="flaticon-lawnmower" />
                        </div>
                        <div className="icon">
                          <i class="fa-regular fa-hand-holding-seedling"></i>
                        </div>
                        <div className="text">
                          <h5 className="title">Soil Analysis</h5>
                          <p>Optimizing growth with thorough soil analysis.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInDown">
                        <div className="shape icon-shape">
                          <i className="flaticon-watering-can" />
                        </div>
                        <div className="icon">
                          <i class="fa-thin fa-building-wheat"></i>
                        </div>
                        <div className="text">
                          <h5 className="title">Garden Redesign</h5>
                          <p>
                            Revitalizing outdoor spaces with expert garden
                            redesign.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="features-two_image-box p-r z-1 text-center pr-lg-60 mb-50 wow fadeInRight">
                <img
                  src="assets/images/features/features-5.jpg"
                  className="mt-50"
                  alt="features image"
                />
                <div className="shape shape-one">
                  <span />
                </div>
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
export default Service;
