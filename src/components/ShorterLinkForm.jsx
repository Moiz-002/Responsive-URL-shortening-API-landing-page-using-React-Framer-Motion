import { useState, useRef } from "react";
import {motion, useInView} from 'motion/react';

const ShorterLinkForm = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [linksList, setLinksList] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  function validateUrl(url) {
    return /^https?:\/\//i.test(url);
  }

  async function handleShorten() {
    if (!link.trim()) {
      setError("Please add a link");
      return;
    }

    if (!validateUrl(link)) {
      setError("Please enter a valid URL");
      return;
    }

    try {
      setError("");

      const res = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(link)}`
      );

      const short = await res.text();

      setLinksList((prev) => [
        ...prev,
        { original: link, short: short.trim() },
      ]);

      setLink("");
    } catch {
      setError("Something went wrong. Try again.");
    }
  }

  function copyToClipboard(shortUrl, index) {
    navigator.clipboard.writeText(shortUrl);
    setCopiedIndex(index);

    setTimeout(() => setCopiedIndex(null), 1500);
  }

  return (
    <motion.section ref={ref} initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }} className="w-full px-4">
      {/* FORM */}
      <div
        className="
          bg-purplePrimary-950 flex gap-4 flex-col sm:flex-row
          bg-cover bg-center rounded-xl 
          p-8 sm:p-16 w-full max-w-[1280px] mx-auto
          bg-[url('/images/bg-shorten-mobile.svg')]
          sm:bg-[url('/images/bg-shorten-desktop.svg')]
          -translate-y-1/2
        "
      >
        <div className="w-full">
          <input
            type="text"
            value={link}
            placeholder="Shorten a link here..."
            onChange={(e) => {
              setLink(e.target.value);
              setError("");
            }}
            className={`
              w-full px-6 py-4 rounded-md outline-none text-greyNeutral-900
              ${error ? "border-2 border-red-500 placeholder-red-400" : ""}
            `}
          />

          {error && (
            <p className="text-red-500 text-sm mt-2 italic">{error}</p>
          )}
        </div>

        <button
  onClick={handleShorten}
  className="
    bg-bluePrimary-400 text-white font-bold 
    px-8 rounded-md
    w-full sm:w-fit sm:min-w-40
    h-[56px]        /* <<< FIXED HEIGHT — NO MORE JUMPING */
    flex items-center justify-center
    transition-all
    active:bg-opacity-80
  "
>
  Shorten It!
</button>

      </div>

      {/* URL LIST */}
      <div
        className="
          w-full max-w-[1280px] mx-auto space-y-4
          max-h-[400px] overflow-y-auto
          px-2
        "
      >
        {linksList.map((item, index) => (
          <div
            key={index}
            className="
              bg-white rounded-lg shadow-md p-4 
              flex flex-col sm:flex-row sm:items-center sm:justify-between 
              gap-4
            "
          >
            <p className="text-greyNeutral-900 break-all font-medium">
              {item.original}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={item.short}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bluePrimary-400 font-bold break-all"
              >
                {item.short}
              </a>

              <button
                onClick={() => copyToClipboard(item.short, index)}
                className={`
                  px-6 py-2 rounded-md font-bold text-white
                  ${copiedIndex === index ? "bg-purplePrimary-950" : "bg-bluePrimary-400 active:bg-opacity-80"}
                `}
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ShorterLinkForm;
