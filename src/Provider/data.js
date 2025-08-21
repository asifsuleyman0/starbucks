class API {
  path = "https://starbucks-data-nine.vercel.app";

  async getData() {
    try {
      const response = await fetch(`${this.path}/menus`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      throw error;
    }
  }
}

export default new API();