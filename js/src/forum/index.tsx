import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';

import MyTags from './components/MyTags';
import type { Children } from 'mithril';
import ItemList from 'flarum/common/utils/ItemList';


app.initializers.add('acpl/my-tags', () => {
  extend(IndexPage.prototype, 'navItems', (items: ItemList<Children>) => {
    if (!app.session.user) return;

    items.add('my-tags', <MyTags />, -13);
  });
});
