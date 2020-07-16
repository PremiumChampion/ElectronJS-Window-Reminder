import React from "react";
import { Text, DefaultButton } from "@fluentui/react";
import { NotificationsRenderer } from "../../NotificationsRenderer";
import { CustomError } from "./../../../helper/CustomError";
import { windowApiRenderer } from "./../../windowApiRender";
import { devApiRenderer } from "./../../devApiRenderer";

export interface iMainProps {

}

interface iMainState {
    err: CustomError;
}


export default class Main extends React.Component<iMainProps, iMainState> {


    private interval: NodeJS.Timeout;

    constructor(props: iMainProps) {
        super(props);
        devApiRenderer.isDevelopement().then(isDev => {
            if (isDev) {
                windowApiRenderer.show();
            } else {
                NotificationsRenderer.createNotification("Fenster Erinnerung gestartet. 👍");
                this.interval = setInterval(() => {
                    let currentTime: Date = new Date(Date.now());
                    if (currentTime.getHours() == 16 && currentTime.getMinutes() == 0) {
                        clearInterval(this.interval);
                        this.sendNotification();
                        windowApiRenderer.maximise();
                        windowApiRenderer.show();
                    }
                }, 20000);
            }
        })

    }

    public render(): JSX.Element {
        return (
            <div className="main">
                <Text variant="mega">FENSTER ZUMACHEN!!</Text>
            </div>
        );
    }

    private sendNotification() {
        NotificationsRenderer.getUserInputFromNotification("Fenster zu!!!!")
            .then(val => {
                // windowApiRenderer.close();
            })
            .catch((err: CustomError) => {
                this.sendNotification();
            });
    }
}