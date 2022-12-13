import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { IonicCheatSheet } from "./pages/IonicCheatSheet";
import { PointsToConsider } from "./pages/PointsToConsider";
import { QuickReferences } from "./pages/QuickReferences";
import { TechReferences } from "./pages/TechReferences";
import { WebDesignPatterns } from "./pages/WebDesignPatterns";



export const AppRoutes = ()=>{

    return(
        
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tech-ref" element={<TechReferences />}></Route>
                <Route path="/quick-refs" element={<QuickReferences />}></Route>
                <Route path="/ionic-cheat-sheet" element={<IonicCheatSheet />}></Route>
                <Route path="/web-design-pattern" element={<WebDesignPatterns/>}></Route>
                <Route path="/points-to-consider" element={<PointsToConsider/>} ></Route>
            </Routes>
        

    );
}