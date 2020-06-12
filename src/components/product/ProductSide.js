import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../../assets/styles/ProductSide.scss';
import sidedata from '../../variables/sidedata';

function ProductSide() {
    const data = sidedata;
        const content = data.map((item, index) => {
            const subItem = item.list.map((subitem, subindex) => {
                return (
                    <li className="m-sm-2 border rounded-pill" key={subindex}>
                        <p className="side-item">{subitem}</p>
                    </li>
                )
            });
            return (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="col-sm-12 ml-auto">
                                <h4 className=' my-3 p-1'>{item.title}</h4>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="col-sm-12 ml-auto">
                            <ul className="side-list">
                                {subItem}
                            </ul>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            )
        }) 

    return (
        <div className='product-side' >
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                {content}
            </Accordion>
        </div>
    );
}

export default ProductSide;
