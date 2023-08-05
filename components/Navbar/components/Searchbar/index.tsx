import { IconSearch } from "@tabler/icons-react";

type SearchbarProps = {
  focused: boolean;
  toggleFocused: () => boolean;
};

export const Searchbar: React.FC<SearchbarProps> = (props) => {
  return (
    <div
      className={`bg-slate-100 rounded-full h-fit px-5 py-3 flex transition-all duration-300 ease-in-out ${
        props.focused ? "flex-[1]" : "flex-[0.9]"
      } `}>
      <input
        className="bg-transparent outline-none text-sm w-full"
        placeholder="Search Product"
        onFocus={props.toggleFocused}
        onBlur={props.toggleFocused}
      />
      <IconSearch size={20} className="text-slate-700" />
    </div>
  );
};
