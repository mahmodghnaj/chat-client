import { chats, totalChats } from "@/store/features/chats";
import { useGetChatsQuery } from "@/store/service/chats";
import { useSelector } from "react-redux";
import InfiniteScroll from "../InfiniteScroll";
import Chat from "./components/chat";
const Chats = () => {
  const allChats = useSelector(chats);
  const total = useSelector(totalChats);
  return (
    <>
      <InfiniteScroll
        className="h-full overflow-y-auto"
        query={useGetChatsQuery}
        data={allChats}
        total={total}
      >
        {(data) =>
          data.map((item: any) => {
            return <Chat key={item.id} chat={item} />;
          })
        }
      </InfiniteScroll>
    </>
  );
};
export default Chats;