import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Modal, ModalProps } from "./index";
import { LayoutGridMenuTopLeft } from "./../../Layout/Grid/GridMenuTopLeft";
import { Button } from "../../Button";
import { useModal } from "fenextjs-hook";
// import { Back } from "../../Back";

export default {
    title: "Modal/Modal",
    component: Modal,
} as Meta;

const Profile: StoryFn<PropsWithChildren<ModalProps>> = (args) => (
    <Modal {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    ElementActionModalActive: (
        <>
            <Button>Button Modal</Button>
            <div style={{ width: "10px", height: "200vh" }}></div>
        </>
    ),
    children: (
        <>
            {/* <Back/> */}
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
        </>
    ),
    typeClose: "inset",
    disabledClose: false,
    useRender:true
} as ModalProps;

const WithLayout_: StoryFn<PropsWithChildren<ModalProps>> = (args) => (
    <LayoutGridMenuTopLeft>
        <div style={{width:10,height:300}}/>
        <Modal {...args} />
        <div style={{width:10,height:2000}}>
            
        </div>
    </LayoutGridMenuTopLeft>
);

export const WithLayout = WithLayout_.bind({});
WithLayout.args = {
    type: "layout-grid",
    useRender:true,
    ElementActionModalActive: (
        <>
            <Button>Button Modal</Button>
        </>
    ),
    children: (
        <>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>

            <div style={{
                width:200,
                height:200,
                overflow:"auto"
            }}>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>

            </div>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
        </>
    ),
} as ModalProps;


const MOREDIV = new Array(10).fill(<><h1>Title</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestias error illo iusto, ex esse ullam aliquam officia
        praesentium labore reprehenderit nostrum quidem exercitationem
        blanditiis est illum pariatur veritatis magni corporis!
    </p></>)

const ModalInModal_: StoryFn<PropsWithChildren<ModalProps>> = (args) => (
   <>
    <Modal {...args} 
    // nameLocalStorage="test"
    name="modal-1" activeByNameLocalStorage={true} useRender={true} ElementActionModalActive={<Button>Button Modal</Button>}>
        <h1>Title</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            error illo iusto, ex esse ullam aliquam officia praesentium labore
            reprehenderit nostrum quidem exercitationem blanditiis est illum
            pariatur veritatis magni corporis!
        </p>
        <Modal
            {...args}
            name="modal-2" activeByNameLocalStorage={true} useRender={true}
            ElementActionModalActive={<Button>Button Modal 2</Button>}
            type="right"
        >
            <h1>Title 2</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
            <Modal
                {...args}
                name="modal-3" activeByNameLocalStorage={true} useRender={true}
                ElementActionModalActive={<Button>Button Modal 3</Button>}
                type="bottom"
            >
                <h1>Title 3</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias error illo iusto, ex esse ullam aliquam officia
                    praesentium labore reprehenderit nostrum quidem
                    exercitationem blanditiis est illum pariatur veritatis magni
                    corporis!
                </p>
                <Modal
                    {...args}
                    name="modal-4" activeByNameLocalStorage={true} useRender={true}
                    ElementActionModalActive={<Button>Button Modal 4</Button>}
                    type="left"
                >
                    <h1>Title 4</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias error illo iusto, ex esse ullam aliquam
                        officia praesentium labore reprehenderit nostrum quidem
                        exercitationem blanditiis est illum pariatur veritatis
                        magni corporis!
                    </p>
                    <Modal
                        {...args}
                        name="modal-5" activeByNameLocalStorage={true} useRender={true}
                        ElementActionModalActive={
                            <Button>Button Modal 5</Button>
                        }
                        type="right"
                    >
                        <h1>Title 5</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestias error illo iusto, ex esse ullam
                            aliquam officia praesentium labore reprehenderit
                            nostrum quidem exercitationem blanditiis est illum
                            pariatur veritatis magni corporis!
                        </p>
                        <Modal
                            {...args}
                            name="modal-6" activeByNameLocalStorage={true} useRender={true}
                            ElementActionModalActive={
                                <Button>Button Modal 6</Button>
                            }
                            type="top"
                        >
                            <h1>Title 6</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Molestias error illo iusto, ex
                                esse ullam aliquam officia praesentium labore
                                reprehenderit nostrum quidem exercitationem
                                blanditiis est illum pariatur veritatis magni
                                corporis!
                            </p>
                            <Modal
                                {...args}
                                name="modal-7" activeByNameLocalStorage={true} useRender={true}
                                ElementActionModalActive={
                                    <Button>Button Modal 7</Button>
                                }
                                type="layout-grid"
                            >
                                <h1>Title 7</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Molestias error illo
                                    iusto, ex esse ullam aliquam officia
                                    praesentium labore reprehenderit nostrum
                                    quidem exercitationem blanditiis est illum
                                    pariatur veritatis magni corporis!
                                </p>
                                {MOREDIV}
                            </Modal>
                            {MOREDIV}
                        </Modal>
                        {MOREDIV}
                    </Modal>
                    {MOREDIV}
                </Modal>
                {MOREDIV}
            </Modal>
            {MOREDIV}
        </Modal>
    </Modal>
    {MOREDIV}
   </>
);

export const ModalInModal = ModalInModal_.bind({});
ModalInModal.args = {
    useRender: true,
} as ModalProps;

const BtnUseModalName = ({ name }: { name: string }) => {
    const { onActive } = useModal({
        name,
    });
    return (
        <>
            <Button onClick={onActive}>Button useModal</Button>
        </>
    );
};

const ProfileUseModal: StoryFn<PropsWithChildren<ModalProps>> = (args) => {
    return (
        <>
            <BtnUseModalName name={args?.name } />
            <br />
            <br />
            <Modal {...args} />
        </>
    );
};

export const UseModalName = ProfileUseModal.bind({});
UseModalName.args = {
    name: "modal-test",
    ElementActionModalActive: (
        <>
            <Button>Button Modal</Button>
        </>
    ),
    children: (
        <>
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias error illo iusto, ex esse ullam aliquam officia
                praesentium labore reprehenderit nostrum quidem exercitationem
                blanditiis est illum pariatur veritatis magni corporis!
            </p>
        </>
    ),
    typeClose: "inset",
    disabledClose: false,
} as ModalProps;



// const ModalInModalContentLocalStorage_: StoryFn<PropsWithChildren<ModalProps>> = (args) => (
//     <Modal {...args} 
//     name="modal-1"  useRender={true} ElementActionModalActive={<Button>Button Modal</Button>}>
//         <h1>Title</h1>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
//             error illo iusto, ex esse ullam aliquam officia praesentium labore
//             reprehenderit nostrum quidem exercitationem blanditiis est illum
//             pariatur veritatis magni corporis!
//         </p>
//         <Modal
//             {...args}
//             name="modal-2"  useRender={true}
//             ElementActionModalActive={<Button>Button Modal 2</Button>}
//             type="right"
//         >
//             <h1>Title 2</h1>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Molestias error illo iusto, ex esse ullam aliquam officia
//                 praesentium labore reprehenderit nostrum quidem exercitationem
//                 blanditiis est illum pariatur veritatis magni corporis!
//             </p>
//             <Modal
//                 {...args}
//                 name="modal-3"  useRender={true}
//                 ElementActionModalActive={<Button>Button Modal 3</Button>}
//                 type="bottom"
//             >
//                 <h1>Title 3</h1>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Molestias error illo iusto, ex esse ullam aliquam officia
//                     praesentium labore reprehenderit nostrum quidem
//                     exercitationem blanditiis est illum pariatur veritatis magni
//                     corporis!
//                 </p>
//                 <Modal
//                     {...args}
//                     name="modal-4"  useRender={true}
//                     ElementActionModalActive={<Button>Button Modal 4</Button>}
//                     type="left"
//                 >
//                     <h1>Title 4</h1>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Molestias error illo iusto, ex esse ullam aliquam
//                         officia praesentium labore reprehenderit nostrum quidem
//                         exercitationem blanditiis est illum pariatur veritatis
//                         magni corporis!
//                     </p>
//                     <Modal
//                         {...args}
//                         name="modal-5"  useRender={true}
//                         ElementActionModalActive={
//                             <Button>Button Modal 5</Button>
//                         }
//                         type="right"
//                     >
//                         <h1>Title 5</h1>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing
//                             elit. Molestias error illo iusto, ex esse ullam
//                             aliquam officia praesentium labore reprehenderit
//                             nostrum quidem exercitationem blanditiis est illum
//                             pariatur veritatis magni corporis!
//                         </p>
//                         <Modal
//                             {...args}
//                             name="modal-6"  useRender={true}
//                             ElementActionModalActive={
//                                 <Button>Button Modal 6</Button>
//                             }
//                             type="top"
//                         >
//                             <h1>Title 6</h1>
//                             <p>
//                                 Lorem ipsum dolor sit amet consectetur
//                                 adipisicing elit. Molestias error illo iusto, ex
//                                 esse ullam aliquam officia praesentium labore
//                                 reprehenderit nostrum quidem exercitationem
//                                 blanditiis est illum pariatur veritatis magni
//                                 corporis!
//                             </p>
//                             <Modal
//                                 {...args}
//                                 name="modal-7"  useRender={true}
//                                 ElementActionModalActive={
//                                     <Button>Button Modal 7</Button>
//                                 }
//                                 type="layout-grid"
//                             >
//                                 <h1>Title 7</h1>
//                                 <p>
//                                     Lorem ipsum dolor sit amet consectetur
//                                     adipisicing elit. Molestias error illo
//                                     iusto, ex esse ullam aliquam officia
//                                     praesentium labore reprehenderit nostrum
//                                     quidem exercitationem blanditiis est illum
//                                     pariatur veritatis magni corporis!
//                                 </p>
//                             </Modal>
//                         </Modal>
//                     </Modal>
//                 </Modal>
//             </Modal>
//         </Modal>
//     </Modal>
// );
// export const ModalInModalContentLocalStorage = ModalInModalContentLocalStorage_.bind({});
// ModalInModalContentLocalStorage.args = {
//     // useRender: true,
//     activeByNameContentLocalStorage:true,
// } as ModalProps;