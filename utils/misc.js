export async function getQuestionsList() {
    try {
      const data = await FetchJson("../static/help/questions.json");
      return data;
    } catch (e) {
      throw new Error("Error: JSON fetch failed");
    }
};

export async function getSliderList() {
    try {
      const data = await FetchJson("../static/index/slider.json");
      return data;
    } catch (e) {
      throw new Error("Error: JSON fetch failed");
    }
};

export async function FetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
  