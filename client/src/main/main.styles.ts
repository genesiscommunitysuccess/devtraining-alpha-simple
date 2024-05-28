import { getApp } from '@genesislcap/foundation-shell/app';
import { css } from '@genesislcap/web-core';
import { stylesFontFaces } from '../styles';
import './main.css';

export const MainStyles = css`
  ${stylesFontFaces}
  :host {
    contain: content;

    --nav-height: 60px;
  }

  :host,
  zero-design-system-provider,
  .dynamic-template,
  foundation-router {
    display: flex;
    width: 100%;
    height: 100%;
  }
`.withBehaviors(getApp().registerStylesTarget('main'));
