import React from "react";
import "./brand.css";
import { atlassian, dropbox, google, shopify, slack } from "./imports";

const socials = [
  { name: "google", logo: google },
  { name: "dropbox", logo: dropbox },
  { name: "shopify", logo: shopify },
  { name: "slack", logo: slack },
  { name: "atlassian", logo: atlassian },
];

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {socials.map((social) => {
        return (
          <div>
            <img src={social.logo} alt={social.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Brand;
