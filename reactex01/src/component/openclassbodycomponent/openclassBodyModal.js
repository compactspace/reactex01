import React from "react";

export const OpenClassBodyModal= (props)=>{
console.log("props.modalnum->"+props.modalnum);
console.log("props.index->"+props.index);
return(<>

<div class="questioncontent" data-val="question1" index={props.index} >
                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>

                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>
                        <div class="qacard">

                            <div class="listimg">
                                step1
                            </div>
                            <div class="listtitle">

                                상단의 클래스오픈 링크를 클릭해주세요
                            </div>
                            <div class="listcontent">
                                복잡한 서류절차는 불필요
                            </div>

                        </div>

                    </div>
</>)
}




