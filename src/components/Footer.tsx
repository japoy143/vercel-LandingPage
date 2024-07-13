import { resourcesLinks, platformLinks, communityLinks } from "../constants";

function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <div>
          <h3 className="text-md mb-4 font-semibold">Resources</h3>
          <ul>
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-4 font-semibold">Platform</h3>
          <ul>
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-4 font-semibold">Commuity</h3>
          <ul>
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
