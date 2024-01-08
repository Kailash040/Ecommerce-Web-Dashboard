"use client"

import { DialogDescription } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";


interface ModelProps {
    title:string,
    description:string,
    isOpen :boolean,
    onClose: () => void,
    children?: React.ReactNode
};

export const Model: React.FC<ModelProps> =({
    title,
    description,
    isOpen,
    onClose,
    children
}) =>{
    const onChange = (open :boolean) =>{
        if(!open){
            onClose()
        }
    };
    return(
    <Dialog open={isOpen} onOpenChange={onChange}>
<DialogContent>
    <DialogHeader>
    <DialogTitle>
        {title}
    </DialogTitle>
    <DialogDescription>
        {description}
    </DialogDescription>
    </DialogHeader>
</DialogContent>
    </Dialog>
    )
}