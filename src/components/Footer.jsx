import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const FooterSection = () => {
  return (
    <>
      <footer className="flex flex-col w-full">

        {/* ====================== BOOST CTA SECTION ====================== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[url('/images/bg-boost-mobile.svg')] sm:bg-[url('/images/bg-boost-desktop.svg')] bg-purplePrimary-950 bg-cover bg-center py-20"
        >
          <div className="text-center text-white max-w-5xl mx-auto px-4">
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Boost your links today
            </motion.h2>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-bluePrimary-400 text-white px-10 py-3 rounded-full font-bold active:bg-opacity-80"
            >
              Get Started
            </motion.button>
          </div>
        </motion.section>

        {/* ====================== FOOTER MAIN ====================== */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full bg-greyNeutral-950"
        >
          <div className="text-white py-16 max-w-[1280px] mx-auto px-4 
            flex flex-col items-center text-center 
            sm:text-start md:flex-row md:items-start md:justify-between gap-12"
          >

            {/* Logo */}
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold">Shortly</h2>
            </motion.div>

            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row gap-20">

              {/* Column 1 */}
              <motion.div variants={fadeUp}>
                <h3 className="font-bold mb-4">Features</h3>
                <ul className="space-y-2 text-greyNeutral-400">
                  <li><a href="#" className="hover:text-bluePrimary-400 text-greyNeutral-400">Link Shortening</a></li>
                  <li><a href="#" className="hover:text-bluePrimary-400 text-greyNeutral-400">Branded Links</a></li>
                  <li><a href="#" className="hover:text-bluePrimary-400 text-greyNeutral-400">Analytics</a></li>
                </ul>
              </motion.div>

              {/* Column 2 */}
              <motion.div variants={fadeUp}>
                <h3 className="font-bold mb-4">Resources</h3>
                <ul className="space-y-2 text-greyNeutral-400">
                  <li><a href="#" className="hover:text-bluePrimary-400 text-greyNeutral-400">Blog</a></li>
                  <li><a href="#" className="hover:text-bluePrimary-400 text-greyNeutral-400">Developers</a></li>
                  <li><a href="#" className="hover:text-bluePrimary-400 text-greyNeutral-400">Support</a></li>
                </ul>
              </motion.div>

              {/* Column 3 */}
              <motion.div variants={fadeUp}>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-greyNeutral-400">
                  <li><a href="#" className="hover:text-bluePrimary-400 text-greyNeutral-400">About</a></li>
                  <li><a href="#" className="hover:text-bluePrimary-400 text-greyNeutral-400">Our Team</a></li>
                  <li><a href="#" className="hover:text-bluePrimary-400 text-greyNeutral-400">Careers</a></li>
                  <li><a href="#" className="hover:text-bluePrimary-400 text-greyNeutral-400">Contact</a></li>
                </ul>
              </motion.div>

            </div>

            {/* Social Icons */}
            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <a href="#"><img src="/images/icon-facebook.svg" alt="facebook" className="hover:opacity-70" /></a>
              <a href="#"><img src="/images/icon-twitter.svg" alt="twitter" className="hover:opacity-70" /></a>
              <a href="#"><img src="/images/icon-pinterest.svg" alt="pinterest" className="hover:opacity-70" /></a>
              <a href="#"><img src="/images/icon-instagram.svg" alt="instagram" className="hover:opacity-70" /></a>
            </motion.div>

          </div>
        </motion.section>

      </footer>
    </>
  );
};

export default FooterSection;
