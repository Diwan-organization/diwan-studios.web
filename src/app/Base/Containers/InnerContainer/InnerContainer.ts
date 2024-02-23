import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidebarAnimationService } from '@App/Common/Services/SidebarAnimation.Service';

@Component({
  selector: 'inner-container',
  templateUrl: './InnerContainer.html',
})
export class InnerContainer implements OnInit {

  constructor(private Animation: SidebarAnimationService) { }

  ngOnInit(): void { }



}
