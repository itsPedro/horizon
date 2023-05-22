import { loading } from "../scripts/components/loading.js";

export async function getQuestionsList() {
  try {
    const data = await FetchJson("../static/help/questions.json");
    return data;
  } catch (e) {
    throw new Error("Error: JSON fetch failed getting questions.");
  }
};

export async function getPosts() {
  try {
    const data = await FetchJson("../static/blog/posts.json");
    return data;
  } catch (e) {
    throw new Error("Error: JSON fetch failed getting posts.");
  }
};

export async function getPostById(id) {
  try {
    const data = await FetchJson(`../static/blog/posts.json`);
    return data.find((post) => (post.id === id));
  } catch (e) {
    throw new Error("Error: JSON fetch failed getting post.");
  }
};


export async function getSliderList() {
  try {
    const data = await FetchJson("https://itspedro.github.io/horizon/static/index/slider.json");
    return data;
  } catch (e) {
    throw new Error("Error: JSON fetch failed getting slider list.");
  }
};

export async function getDifferentialsList() {
  try {
    const data = await FetchJson("https://itspedro.github.io/horizon/static/index/diferenciais.json");
    return data;
  } catch (e) {
    throw new Error("Error: JSON fetch failed getting differentials.");
  }
};

export async function getEnsinosList() {
  try {
    const data = await FetchJson("https://itspedro.github.io/horizon/static/index/ensinos.json");
    return data;
  } catch (e) {
    throw new Error("Error: JSON fetch failed getting ensinos.");
  }
};

export async function FetchJson(url) {
  loading.show();
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}.`);
  };
  const data = await response.json();
  loading.hide();
  return data;
};
