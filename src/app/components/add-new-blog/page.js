import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddNewBlog({
  openBlogDialog,
  setOpenBlogDialog,
  loading,
  setLoading,
  blogFormData,
  setBlogFormData,
  handleSaveBlogData,
}) {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-end items-end ">
        <Button variant="outline" onClick={() => setOpenBlogDialog(true)}>
          Add New Blog
        </Button>
      </div>
      <div>
        <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Blog</DialogTitle>
              <DialogDescription>
                Please be kind and polite, don't use the words that can harm
                someone.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Blog Title
                </Label>
                <Input
                  name="title"
                  placeholder="Goa trip"
                  value={blogFormData.title}
                  onChange={(event) =>
                    setBlogFormData({
                      ...blogFormData,
                      title: event.target.value,
                    })
                  }
                  id="title"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  name="description"
                  value={blogFormData.description}
                  onChange={(event) =>
                    setBlogFormData({
                      ...blogFormData,
                      description: event.target.value,
                    })
                  }
                  className="col-span-3"
                  placeholder="Today i am in Goa"
                />
                {console.log(blogFormData)}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleSaveBlogData}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
