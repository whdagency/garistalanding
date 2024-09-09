import { Dialog, DialogContent } from "@/components/ui/dialog";
import ReactPlayer from "react-player/lazy";

type GaristaOverviewProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const GaristaOverview = ({ isOpen, setIsOpen }: GaristaOverviewProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        id="hide"
        className="max-w-full max-h-full p-0 bg-transparent border-none shadow-none"
      >
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 rounded-full">
          <div
            className="relative w-full max-w-5xl aspect-video"
            id="garista-overview"
          >
            <ReactPlayer
              url={"https://youtu.be/52b5a_wXZtQ"}
              playing={true}
              width={"100%"}
              height={"100%"}
              onEnded={() => setIsOpen(false)}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GaristaOverview;
