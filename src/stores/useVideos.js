import { create } from "zustand";

const useVideos = create((set) => ({
  dataVideos: [],
  error: null,
  fetchVideos: async () => {
    console.log("Fetching videos...");
    fetch("https://667c59353c30891b865c584c.mockapi.io/video")
      .then((response) => response.json())
      .then((data) => set({ dataVideos: data }));
  },
  addVideo(data) {
    console.log(data, "agregando video");
    fetch("https://667c59353c30891b865c584c.mockapi.io/video", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        set({ error: null });
      })
      .catch((error) => {
        set({ error: error });
      });
  },
  deleteVideo(idVideo) {
    console.log("borrando video..");
    fetch(`https://667c59353c30891b865c584c.mockapi.io/video/${idVideo}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        set({ error: null });
        console.log("response delete", response);
        set((state) => {
          state.fetchVideos();
          return {
            dataVideos: state.dataVideos,
          };
        });
      })
      .catch((error) => {
        console.log("error :", error);
        set({ error: error });
      });
  },
  editVideo(idVideo, data) {
    console.log("editando video..", data);
    fetch(`https://667c59353c30891b865c584c.mockapi.io/video/${idVideo}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        set({ error: null });
        console.log("response edit", response);
        set((state) => {
          state.fetchVideos();
          return {
            dataVideos: state.dataVideos,
          };
        });
      })
      .catch((error) => {
        console.log("error :", error);
        set({ error: error });
      });
  },
}));

export default useVideos;
