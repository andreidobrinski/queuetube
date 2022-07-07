import ArrowBack from './ArrowBack.svelte';
import PlaylistPlay from './PlaylistPlay.svelte';
import Settings from './Settings.svelte';
import PlayArrow from './PlayArrow.svelte';
import Add from './Add.svelte';
import Delete from './Delete.svelte';
import Check from './Check.svelte';
import MoreVert from './MoreVert.svelte';

export const icons = {
  ArrowBack,
  PlaylistPlay,
  Settings,
  PlayArrow,
  Add,
  Delete,
  Check,
  MoreVert
}

export type Icons = keyof typeof icons;