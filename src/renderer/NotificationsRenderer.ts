import { CustomError } from "./../helper/CustomError";

export class NotificationsRenderer {
    public static createNotification(title: string, message: string = "") {
        let newNotification = new Notification(title, { body: message, lang: "DE-DE" } as NotificationOptions);
        debugger;
    }

    public static getUserInputFromNotification(title: string, message: string = ""): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let newNotification = new Notification(title, { body: message, lang: "DE-DE", renotify: false, requireInteraction: true,  } as NotificationOptions);
            newNotification.onclick = (ev: Event) => {
                resolve(true);
            }
            newNotification.onclose = ((notification: Notification, ev: Event) => {
                reject(new CustomError("The Notification Was dismissed without the user clicking on it", "public static getUserInputFromNotification(title: string, message: string = \"\"): Promise<boolean>", new Error("Notification was Dismissed without a user interaction")))
            }).bind(this)
        });
    }
}