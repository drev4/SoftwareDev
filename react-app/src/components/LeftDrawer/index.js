import {Divider, Drawer, IconButton, List, Toolbar} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {mainListItems, secondaryListItems} from "../listItems";


export default function LeftDrawer({open, toogleDrawer}) {
    const handleClick = () => {
        toogleDrawer()
    }
    return (
        <Drawer open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={handleClick}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
            </List>
        </Drawer>
    )
}
