import { Route, Routes } from "react-router-dom";
// import NavigationDrawer, { NavItems } from "../components/NavigationDrawer";
import { HomeScreen } from "../screens/Home";
import DisplayPage from "../screens/Screen 2/DisplayPage"
import ChatDisplayPage from "../screens/ChatScreen/Chatdisplaypage";
// import More from "../assets/More.svg?react"
import LiveUploading from "../screens/Livepage/LiveUploadingPage";
import Createpostpage from "../screens/Home/Createpostpage";
import Audioqrpage from "../screens/Home/audioqrpage/Audioqrpage";
import Creators from "../screens/Home/supoortcreaters/Creators";
import StarsPage from "../screens/Home/startsbalancepage/StarsPage";
import Reelaccountspage from "../screens/Home/reelpage/ReelAccountspage";
import Reelcreatedpage from "../screens/Home/reelcreated/Reelcreatedpage";
import LanguageDialogpage from "../screens/ChatScreen/LanguageDialogpage";
import Recents from "../screens/ChatScreen/Recents"
import RequestPage from "../screens/ChatScreen/RequestPage";
import Messages from "../screens/Tweets/Tweetpage2";
import Tweets from "../screens/Tweets/Tweetpage1"; 
import Commentbox from "../screens/Home/Commentbox/Commentbox";
import ReelPage from "../screens/Saved/SavedPage";  
import StreamingPage from "../screens/Streaming/StreamingPage";     
import Editprofile from "../screens/Tweets/Editprofile";    
import FollowingDialog from "../screens/Screen 2/FollowingDialog"; 
import BlurRequestPage from "../screens/ChatScreen/BlurRequestPAge";
import Dialog from "../screens/Screen 2/Dialog";
import GeneralPage from "../screens/ChatScreen/GeneralChatPage";
import OptionChatScreen from "../screens/ChatScreen/optionchatscreen";
import ChatTheme from "../screens/ChatScreen/ChatTheme";
import RequestwithoutcirclePage from "../screens/ChatScreen/Requestwithoutcirclepage";
import Call from "../screens/ChatScreen/Call";
import CallRequest from "../screens/ChatScreen/CallRequest";
import GreenCall from "../screens/ChatScreen/GreenCall";


import SearchResult from "../screens/Serachresult/SearchResult";
import StoryPage from "../screens/Serachresult/StoryPage";
// import FilterAdjustment  from "../screens/Serachresult/FilterAdjustment"
import FilterImage from "../screens/Serachresult/FilterImage";
import CreateNewPost from "../screens/Serachresult/CreateNewPost";
// import ProfileCaption from "../screens/Serachresult/ProfileCaption";
// import FilterPage from "../screens/ChatScreen/FilterPage";
// import AIacces from "../screens/ChatScreen/AIacces";
// import OtherFilerPage from "../screens/ChatScreen/OtherFilterPage";
// import Stickers from "../screens/ChatScreen/Stickers";
// import GiphyStickers from "../screens/ChatScreen/GiphyStickers";
import FilterScreen from "../screens/ChatScreen/FilterScreen";
import OtherFilterPageScreen from "../screens/ChatScreen/OtherFilterPageScreen";
import Aiaccesscreen from "../screens/ChatScreen/AiaccesScreen";
import StickerScreen from "../screens/ChatScreen/StickerScreen";
import GiphyStickersScreen from "../screens/ChatScreen/GiphyStickerScreen";
import MoreSticker from "../screens/ChatScreen/MoreSticker";
import MoreStickerscreen from "../screens/ChatScreen/MoreStickerscreen";
// import Createpostpage from "../screens/Home/Createpostpage";
// import DiscardDialog from "../screens/Serachresult/DialogBoxes/DiscardDialog";
import ReelsScreen from "../screens/Serachresult/ReelsScreen"
// import ShareModal from "../screens/Serachresult/ShareModel";
// import Rightmenu from "../screens/Home/homecomponents/Rightmenu";
 

// const navItems: NavItems = [
//     { title: 'More', href: '/stars', icon: More },
// ];

const HomeRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={< p>Hello world</p>} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/createpostpage" element={<Createpostpage />} />
            <Route path="/audioqrpage" element={<Audioqrpage/>} />
            <Route path="/creatorspage" element={<Creators/>} />
            <Route path="/screen2" element={<DisplayPage />} />
            <Route path="/messages" element={<ChatDisplayPage />} />
            <Route path="/uploading" element={<LiveUploading />} />
            <Route path="/starsbalance" element={<StarsPage />} />
            <Route path="/reelpage" element={<Reelaccountspage />} />
            <Route path="/reelcreated" element={<Reelcreatedpage/>} />
            <Route path="/language" element={<LanguageDialogpage/>} />
            <Route path="/recentspage" element={<Recents/>} />
            <Route path="/requestpage" element={<RequestPage/>} />
            <Route path="/notifications" element={<Messages/>} />
            <Route path="/profile" element={<Tweets/>} />
            <Route path="/comment" element={<Commentbox/>}/>
            <Route path="/reel" element={<ReelPage/>} />
            <Route path="/streaming" element={<StreamingPage/>} />
            <Route path="/editt" element={<Editprofile/>} />
            <Route path="/following" element={<FollowingDialog/>} />
            <Route path="/request" element={<BlurRequestPage/>} />
            <Route path="/dialog" element={<Dialog/>} />
            <Route path="/chat" element={<GeneralPage/>} />
            <Route path="/chatop" element={<OptionChatScreen/>} />
            <Route path="/chattheme" element={<ChatTheme/>} />
            <Route path="/page" element={<RequestwithoutcirclePage/>} />
            <Route path="/call" element={<Call/>} />
            <Route path="/callrequest" element={<CallRequest/>} />
            <Route path="/receive" element={<GreenCall/>} />
            
            <Route path="/searchresult" element={<SearchResult />} />
            <Route path="/storypage" element={<StoryPage />} />
            {/* <Route path="/filteradjustment" element={<FilterAdjustment />} /> */}
            <Route path="/filterimage" element={<FilterImage />} />
            <Route path="/creatnewpost" element={<CreateNewPost />} />
            {/* <Route path="/profilecaption" element={<ProfileCaption />} /> */}
            <Route path="/filterscreen" element={<FilterScreen />} />
            <Route path="/Aiaccesscreen" element={<Aiaccesscreen />} />
            <Route path="/otherFilerPagescreen" element={< OtherFilterPageScreen />} />
            <Route path="/stickerscreen" element={< StickerScreen />} />
            <Route path="/giphystickerscreen" element={<GiphyStickersScreen  />} />
            <Route path="/moresticker" element={<MoreSticker  />} />
            <Route path="/morestickerscreen" element={<MoreStickerscreen  />} />
            <Route path="/createpostpage" element={<Createpostpage />} />
            <Route path="/reel" element={<ReelsScreen />} />
            {/* <Route path="/discard" element={<DiscardDialog />} /> */}
            {/* <Route path="/threedots" element={<BsThreeDots />} /> */}
            {/* <Route path="/sharemodel" element={<ShareModal/>} /> */}
            
             

            
            
        </Routes>
    )
}


export default HomeRoutes