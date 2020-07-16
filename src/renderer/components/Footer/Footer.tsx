import React from "react";
import { Text, Stack} from "@fluentui/react";
export default class Footer extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <Stack horizontal horizontalAlign={"center"}><Text variant={"tiny"}>Created by Timo Woityschyn</Text></Stack>
        );
    }
}