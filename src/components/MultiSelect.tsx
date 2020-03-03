import React, {useState} from "react"
import {Chip, createStyles, FormControl, Input, InputLabel, MenuItem, Select, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            maxWidth: 300,
        },
        chips: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        chip: {
            margin: 2,
        },
        noLabel: {
            marginTop: theme.spacing(3),
        },
    }),
);

interface Props {
}

const MultiSelect = (props: Props) => {

    const classes = useStyles();
    const [operand, setOperand] = React.useState<string[]>([]);


    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setOperand(event.target.value as string[]);
    };


    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-chip-label">Operand</InputLabel>
            <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={operand}
                onChange={handleChange}
                input={<Input id="select-multiple-chip"/>}
                renderValue={selected => (
                    <div className={classes.chips}>
                        {(selected as string[]).map(value => (
                            <Chip key={value} label={value} className={classes.chip}/>
                        ))}
                    </div>
                )}
            >
                <MenuItem value={"+"}>
                    {"+"}
                </MenuItem>
                <MenuItem value={"-"}>
                    {"-"}
                </MenuItem>
                <MenuItem value={"*"}>
                    {"*"}
                </MenuItem>
                <MenuItem value={"/"}>
                    {"/"}
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default MultiSelect;