import Vue, { VNode } from "vue"
import * as tsx from "vue-tsx-support"
import { FeatherHeartIcon } from "~/components/commons/FeatherIcons"
import { SITE_NAME } from "~/config"

export const TheFooter = tsx.component({
  name: "TheFooter",
  render(): VNode {
    return (
      <div class="bg-gray-900">
        <div class="container mx-auto max-w-screen-md">
          <div class="flex justify-end text-xs p-4 text-gray-200">
            {SITE_NAME} - Made with
            <a
              href="https://github.com/ci7lus/caramelize"
              target="_blank"
              class="px-1 text-blue-500"
            >
              Caramelize
            </a>
            and
            <span class="pl-1">
              <FeatherHeartIcon size={12} />
            </span>
          </div>
        </div>
      </div>
    )
  },
})
