import { Loader } from 'lucide-react'

const Spinner = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading && (
        <div className="absolute left-0 top-0 z-50 flex h-full w-full select-none items-center justify-center bg-black/30">
          <Loader className="z-[60] h-10 w-10 animate-spin text-white duration-1000" />
        </div>
      )}
    </>
  )
}

export default Spinner
