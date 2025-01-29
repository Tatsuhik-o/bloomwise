import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog"} />
      <section className="blog-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="blog-details-wrapper">
                <div className="blog-post wow fadeInUp">
                  <div className="post-meta">
                    <span className="author">
                      <img
                        src="assets/images/blog/author-thumb-4.jpg"
                        alt="author"
                      />
                      <Link legacyBehavior href="/blog">
                        <a>
                          <span>By</span> Jessica Reynolds
                        </a>
                      </Link>
                    </span>
                    <span className="date">
                      <Link legacyBehavior href="/blog">
                        15 December 2021
                      </Link>
                    </span>
                    <span className="comment">
                      <Link legacyBehavior href="/blog">
                        2 Comments
                      </Link>
                    </span>
                  </div>
                  <div className="entry-content">
                    <h3 className="title">
                      Blossoming Beginnings: A Glimpse into Bloomwise Gardens
                    </h3>
                    <p>
                      In the heart of 2021, Bloomwise Gardens sprouted from a
                      shared passion for transforming outdoor spaces into
                      vibrant sanctuaries. Founded with a commitment to
                      personalized service, sustainable practices, and a
                      profound love for nature, our horticultural journey has
                      been nothing short of inspiring. As we reflect on our
                      blossoming beginnings, we find pride in the lush
                      landscapes and flourishing gardens we've had the privilege
                      to nurture across the community.Our team, led by skilled
                      landscape designers and plant care technicians, embarked
                      on this journey with a simple yet powerful vision: to
                      create not just gardens but living artworks that resonate
                      with the unique essence of each homeowner. Every garden we
                      touch is a canvas, and we bring to life the vision of our
                      clients, ensuring that their outdoor spaces become
                      extensions of their personality.{" "}
                    </p>
                    <div className="block-image">
                      <img
                        src="assets/images/blog/blog-single-1.jpg"
                        alt="Post Image"
                      />
                    </div>
                    <p>
                      Our journey is marked not just by the projects we
                      undertake but by the relationships we build. The joy
                      reflected in our clients' eyes when they see their
                      transformed gardens is our greatest reward. Each garden
                      tells a unique story, and we are honored to be the
                      storytellers, weaving nature's beauty into the fabric of
                      people's lives. As we continue to grow and evolve,
                      Bloomwise Gardens remains dedicated to creating outdoor
                      spaces that transcend the ordinary. Join us on this green
                      adventure, where every bloom is a chapter, and every
                      garden is a masterpiece in the making.
                    </p>
                    <blockquote className="wp-block-quote">
                      <img
                        src="assets/images/blog/quote.png"
                        alt="quote image"
                      />
                      <h3>
                        Flowers always make people better, happier, and more
                        helpful; they are sunshine, food, and medicine to the
                        soul.
                      </h3>
                      <span>Luther Burbank</span>
                    </blockquote>
                  </div>
                  <div className="entry-footer wow fadeInUp">
                    <div className="tag-links">
                      <h6>Popular Tags</h6>
                      <a href="#">Gardening</a>
                      <a href="#">Outdoor Spaces</a>
                      <a href="#">Journey</a>
                    </div>
                    <div className="social-share">
                      <h6>Share:</h6>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="comments-area mb-80 wow fadeInUp">
                  <h3 className="comments-title mb-40">Comments: </h3>
                  <ul className="comments-list">
                    <li className="comment mb-40">
                      <div className="comment-avatar">
                        <img
                          src="assets/images/blog/comment-1.jpg"
                          alt="comment author"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            NatureLover85
                            <span className="date">January 25, 2022</span>
                          </span>
                          <p>
                            I loved reading about Bloomwise Gardens' journey!
                            The commitment to sustainability really resonates
                            with me. Can't wait to see more articles on
                            sustainable gardening practices and maybe some DIY
                            tips for eco-friendly gardeners!
                          </p>
                          <a href="#" className="btn-link">
                            Reply
                            <i className="far fa-angle-double-right" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="comment mb-40">
                      <div className="comment-avatar">
                        <img
                          src="assets/images/blog/comment-2.jpg"
                          alt="comment author"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Jessica Reynolds
                            <span className="date">February 14, 2022</span>
                          </span>
                          <p>
                            @GardeningEnthusiast21 Thank you for your kind words
                            and enthusiasm! We're thrilled that our commitment
                            to sustainability resonates with you. Your feedback
                            is invaluable, and we're already working on articles
                            to share more about sustainable gardening practices
                            and eco-friendly DIY tips. Stay tuned for more green
                            inspiration! 🌿🌷
                          </p>
                          <a href="#" className="btn-link">
                            Reply
                            <i className="far fa-angle-double-right" />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comments-respond mb-35 wow fadeInUp">
                  <h3 className="comments-heading">Leave a Comments</h3>
                  <p>Send us your valuable Thoughts</p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="comment-form"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Name *"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email *"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            name="message"
                            className="form_control"
                            cols={30}
                            placeholder="Comments"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn primary-btn">
                            Send A Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="sidebar-widget-area">
                <div className="sidebar-widget widget-search gray-bg mb-40 wow fadeInUp">
                  <h4 className="widget-title">Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <label>
                        <i className="far fa-search" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Search"
                        name="search"
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="sidebar-widget widget-category gray-bg mb-40 wow fadeInUp">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <a href="#">
                        Gardening Tips and Tricks
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Landscape Inspirations
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Sustainable Gardening
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        News and Updates
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>
                  Sponsors: <br />
                </h3>
                <br />
                <div className="banner-content text-white sponsor">
                  <a href="https://qcgardens.org/" target="_blank">
                    <img
                      src="assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
                  </a>
                </div>
                <div className="sidebar-widget widget-tag-cloud mb-40 wow fadeInUp">
                  <h4 className="widget-title">Tags</h4>
                  <a href="#">Garden Transformation</a>
                  <a href="#">Eco-Friendly</a>
                  <a href="#">Horticultural</a>
                  <a href="#">Seasonal Plant</a>
                  <a href="#">Nature</a>
                  <a href="#">Community Green</a>
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
export default BlogDetails;
