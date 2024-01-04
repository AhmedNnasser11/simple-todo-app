const Header = () => {
  return (
    <div className=" flex border bg bg-blue-700 text-white w-[60%] mx-auto px-3 py-2 rounded-md">
        <div className="w-[33%] px-3 text-center">
            task name
        </div>
        <div className="w-[33%] px-3 border-l text-center">
            status
        </div>
        <div className="w-[33%] px-3 border-l text-center">
            actions
        </div>
    </div>
  )
}
export default Header