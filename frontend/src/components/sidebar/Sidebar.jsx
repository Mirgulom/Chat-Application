import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider-vertical overflow-y-scroll h-auto px-1">
        <Conversations />
      </div>
        <LogoutButton />
    </div>
  )
}

export default Sidebar
