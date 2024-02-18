import { useState, useEffect } from "react";
import { firebase } from "../firebase";
const collatedTasksExists = () => {};

export const useTasks = (selectedProject) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection("tasks")
            .where("userId", "==", "brcDanD2MrCIbkIsLKgM");

        unsubscribe =
            selectedProject && !collatedTasksExists(selectedProject)
                ? (unsubscribe = unsubscribe.where(
                      "projectId",
                      "==",
                      selectedProject
                  ))
                : selectedProject === "TODAY"
                ? (unsubscribe = unsubscribe.where(
                      "date",
                      "==",
                      moment().format("DD/MM/YYYY")
                  ))
                : selectedProject === "INBOX" || selectedProject === 0
                ? (unsubscribe = unsubscribe.where("date", "==", ""))
                : unsubscribe;
    }, [selectedProject]);
};
