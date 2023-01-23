import classNames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouterPaths } from '../routerPaths';
import styles from './SkeletonDemoPage.module.scss';

const SkeletonCss: FC = () => {
  return (
    <div className={classNames('container', styles.skeletonDemoPage)}>
      <div className={styles.panel}>
        <h2>Container</h2>
        <p>
          The <code>.container</code> class is a main centered wrapper.
        </p>
      </div>
      <div className={styles.panel}>
        <h2>Grid</h2>
        <div className="row">
          <div className="one column">One</div>
          <div className="eleven columns">Eleven</div>
        </div>
        <div className="row">
          <div className="six columns">Six</div>
          <div className="six columns">Six</div>
        </div>
      </div>

      <div className={styles.panel}>
        <h2>Headings</h2>
        <p>H6 is 50 rem, H1 is 15 rem.</p>
      </div>

      <div className={styles.panel}>
        <h2>Buttons</h2>
        <p>
          <button>simple button</button>
          <button className="button-primary">simple button</button>
          <Link to={RouterPaths.Landing} className="button">
            link with button class
          </Link>
        </p>
      </div>

      <div className={styles.panel}>
        <h2>Forms</h2>
        <p>All inputs, select, and buttons are normalized.</p>
        <p>
          <label htmlFor="exampleEmailInput">Your email</label>
          <input type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
        </p>
      </div>

      <div className={styles.panel}>
        <h2>Lists</h2>
        <ul>
          <li>Unordered lists have basic styles</li>
          <li>They use the circle list style</li>
          <li>
            Ordered list
            <ol>
              <li>Ordered lists also have basic styles</li>
              <li>and can be nested</li>
            </ol>
          </li>
        </ul>
      </div>

      <div className={styles.panel}>
        <h2>Code</h2>
        <p>
          Code works with <code>code</code> and <code>pre</code>. Use code for inline, pre+code for block.
        </p>
        <pre>
          <code>
            .some-class {'{'} background-color: red; {'}'}
          </code>
        </pre>
      </div>

      <div className={styles.panel}>
        <h2>Tables</h2>
        <p>Use thead and tbody.</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dave Gamache</td>
              <td>26</td>
            </tr>
            <tr>
              <td>Dwayne Johnson</td>
              <td>42</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.panel}>
        <h2>Media queries</h2>
        <p>
          Skeleton is mobile first. Breakpoints: Desktop HD (1200px), Desktop (1000px), Tablet (750px), Phablet (550px),
          Mobile (400px)
        </p>
        <p>
          For example <code>@media (min-width: 400px) {}</code>
        </p>
      </div>

      <div className={styles.panel}>
        <h2>Utility classes</h2>
        <ul>
          <li>
            <code>u-full-width</code>: width 100%
          </li>
          <li>
            <code>u-max-full-width</code>: max width 100%
          </li>
          <li>
            <code>u-pull-left</code>, <code>u-pull-right</code>: float
          </li>
          <li>
            <code>u-cf</code>: clear float
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkeletonCss;
