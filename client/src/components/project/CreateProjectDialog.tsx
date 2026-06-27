import { useState } from "react";
import { useCreateProject } from "@/hooks/useCreateProject";

import Button from "@/components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";

import ProjectForm from "./ProjectForm";
import type { ProjectFormData } from "./Schema";

export default function CreateProjectDialog() {
    const [open, setOpen] = useState(false);
    const mutation = useCreateProject();

    const handleSubmit = async (
        data: ProjectFormData
    ) => {
        await mutation.mutateAsync(data);

        setOpen(false);
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                + New Project
            </Button>

            <Dialog
                open={open}
                onOpenChange={setOpen}
            >
                <DialogContent>

                    <DialogClose
                        onClick={() => setOpen(false)}
                    />

                    <DialogHeader>
                        <DialogTitle>
                            Create Project
                        </DialogTitle>
                    </DialogHeader>

                    <ProjectForm
                        onSubmit={handleSubmit}
                        isLoading={mutation.isPending}
                    />

                </DialogContent>
            </Dialog>
        </>
    );
}