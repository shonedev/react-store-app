// Change the meta tags inside React App
import React from "react";

export default function Seo({ title, description }) {
  document.querySelector("title").innerHTML = title;
  return null;
}
