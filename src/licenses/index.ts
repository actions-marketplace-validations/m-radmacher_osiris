import chalk from 'chalk';
import mit from './mit';
import * as core from '@actions/core';
import LGPL30orlater from './LGPL-3.0-or-later';

export function getLicenseFromName(licenseName: string, failOnMissingLicense: boolean): string {
	switch (licenseName) {
		case 'MIT':
			return mit;
    case 'LGPL-3.0-or-later':
      return LGPL30orlater;
		default:
			console.log(chalk.hex('#ff0000')(`Could not find license ${licenseName}`));
			if (failOnMissingLicense) {
				core.setFailed(`Could not find license ${licenseName}`);
				process.exit(core.ExitCode.Failure);
			}
	}
  return '';
}
