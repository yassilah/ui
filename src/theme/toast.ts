import type { ModuleOptions } from '../module'

export default (options: Required<ModuleOptions>) => ({
  slots: {
    root: 'relative group overflow-hidden bg-white dark:bg-gray-900 shadow-lg rounded-lg ring ring-gray-200 dark:ring-gray-800 p-4 flex gap-2.5 focus:outline-none',
    wrapper: 'w-0 flex-1 flex flex-col gap-1',
    title: 'text-sm font-medium text-gray-900 dark:text-white',
    description: 'text-sm text-gray-500 dark:text-gray-400',
    icon: 'shrink-0 size-5',
    avatar: 'shrink-0',
    avatarSize: '2xl',
    actions: 'flex gap-1.5 shrink-0',
    progress: 'absolute inset-x-0 bottom-0 h-1 z-[-1]',
    close: 'p-0.5'
  },
  variants: {
    color: {
      ...Object.fromEntries((options.theme.colors || []).map((color: string) => [color, {
        root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400`,
        icon: `text-${color}-500 dark:text-${color}-400`,
        progress: `bg-${color}-500 dark:bg-${color}-400`
      }])),
      gray: {
        root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-900 dark:focus-visible:ring-white',
        icon: 'text-gray-900 dark:text-white',
        progress: 'bg-gray-900 dark:bg-white'
      }
    },
    multiline: {
      true: {
        root: 'items-start',
        actions: 'items-start mt-1'
      },
      false: {
        root: 'items-center',
        actions: 'items-center'
      }
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})
