
const Bun_ = eval("Bun");

const main = async () => {

    const glob = new Bun_.Glob("**/_.stories.tsx");

    const URL_BASE = `./src`

    let COMPONENT_LIST: string[] = []
    const COMPONENTPROPS : any = {
        "Chat":`
                 chatFormSendMessage={{}}
                 chatMessage={[]}
                 chatUser={[]}   
        
        
        `,
        "ChatMessage":`
             id={"1"}
        `,
        "Breadcrumb":`
             links={[]}
        `,
        "ItemMenu":`
            text="menu"
            url="/"

        `,
        "InputSelect":`
            options={[]}
        `,
        "InputFileStatus":`
            onUploadFile={async (e)=>e}
        `,
        "InputSelectT":`
                    options={[]}
                    onParse={(e)=>{
                        return {
                            id:"",
                            text:"option"
                        }
                    }}

        `,
        "InputSelectMultiple":`
                    options={[]}

        `,
        "InputCode":`
             maxLength={6}
        `,
        "InputTextSelect":`
             options={[]}  
        `,
        "InputSelectMultipleT":`
                    options={[]}
                    onParse={(e)=>{
                        return {
                            id:"",
                            text:"option"
                        }
                    }}
        `,
        "InputUnitBase":`
             options={[]} 
        `,
        "Counter":`
            number={100}
        `,
        "ImgGallery":`
            imgs={[]} 
        `,
        "ImgSlider":`
            imgs={[]}   
        `,
        "PaginationItemPage":`
            nItems={10}
        `,
        "Pagination":`
            nItems={10}  
        `,
        "Table":`
            header={[]}
            items={[]}
            name="table"
        `,
        "Alert":`
                 message="alert" 
                 type="WARNING"  
        `,
        "Collapse":`
             header={<></>}
        `,
        "DropDown":`
             header={<></>}
        `,
        "PrintIframe":`
            onComponent={()=>""}  
            url=""
        `,
        "PrintPage":`
            onComponent={()=>""}  
        `,
        "Steps":`
            items={[]}
        `,
        "Link":`
            href={"/"}        
        `,
        "GridGallery":`
            items={[]}
        `,
        "ChronologicalList":`
             items={[]}
        `,
        "Img":`
            src=""
        `,
        "Portal":`
            children=""
        `,
        "ProgressCircle":`
            p={10}
            showP={true}
        `,
        "ProgressLine":`
            p={10}
            showP={true}
        `
    }

    for await (const path of glob.scan(URL_BASE)) {
        let COMPONENT = `${path}`.replace("_.stories.tsx", "")
                                .replaceAll("/", "")
                                .replace("PaginationPagination", "Pagination")
                                .replace("ChatChat", "Chat")
                                .replace("SwichViewSwichView", "SwichView")
                                .replace("LayoutGridGrid", "LayoutGrid")
                                .replace("Header", "")
        if (["LoaderCurrent", "ModalBase", "","InputSelectOption","LayoutGridMenuLeft","LayoutGridMenuTopLeft","LayoutGridMenuTop","Portal"].includes(COMPONENT)) {
            continue;
        }
        if (COMPONENT == "ModalModal") {
            COMPONENT = "Modal"
        }
        if (COMPONENT == "CollapseSimple") {
            COMPONENT = "Collapse"
        }
        if (COMPONENT == "PaginationAll") {
            COMPONENT = "Pagination"
        }
        if (COMPONENT == "NotificationFixed") {
            COMPONENT = "Notification"
        }
        if (COMPONENT == "Error") {
            COMPONENT = "ErrorComponent"
        }
        COMPONENT_LIST.push(COMPONENT)
    }

    await Bun_.write("./src/_.stories.tsx", `
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { LayoutGridMenuTopLeft,${COMPONENT_LIST.join(",")} } from "./index";

export default {
    title: "All",
    component: ()=>"",
} as Meta;

const Profile: StoryFn<any> = () => (
<LayoutGridMenuTopLeft
    menuLeft={<>
        ${COMPONENT_LIST.map(c=>{
            return `
                <div className="fenext-menu-item">
                    <a className="fenext-menu-item-a" href="#${c}" style={{padding:"1rem"}}>
                        ${c}
                    </a>
                </div>
            `
        }).join("\n\n")}
    </>}
>
    <div style={{display:"grid",gap:"8rem",padding:"1rem",gridTemplateColumns:"1fr"}}>
        ${COMPONENT_LIST.map(c=>{
            return `
                <div style={{position:"relative",border:"1px solid gray",borderRadius:"1rem"}} >
                    <div id="${c}" style={{position:"absolute",bottom:"calc(105% + var(--fenext-size-menu-top))"}}/>
                    <div style={{borderBottom:"1px solid gray",padding:"1rem"}}>
                        <Title>${c}</Title>
                    </div>
                    <div style={{padding:"1rem"}}>
                        <${c}
                            ${COMPONENTPROPS?.[c] ?? ''}
                        >
                            Test Children
                        </${c}>
                    </div>
                </div>
            `
        }).join("\n\n")}
    </div>
</LayoutGridMenuTopLeft>
);
export const Index = Profile.bind({});
Index.args = {};
    
    
    `);
}
main()