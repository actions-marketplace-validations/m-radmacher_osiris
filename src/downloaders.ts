import axios from 'axios';
import { getLicenseFromName } from './licenses';
import pdfsharpLicense from './licenses/pdfsharp';

/**
 * Downloads a license file from a GitHub repository.
 * @param url The URL to the license file.
 */
export async function github(url: string): Promise<string> {
	const rawUrl = url.replace('github.com', 'raw.githubusercontent.com').replace('/blob', '');
	const license = await axios.get(rawUrl);
	return license.data;
}

/**
 * "Downloads" a license file from the NuGet API.
 * Actually just returns the saved license text.
 * @param url The URL to the license file.
 * @param failOnMissingLicense Whether to fail the action if a license is missing.
 */
export async function nuget(url: string, failOnMissingLicense: boolean): Promise<string> {
	const licenseType = url.split('/')[3];
	return getLicenseFromName(licenseType, failOnMissingLicense);
}

export function pdfsharp(): string {
	return pdfsharpLicense;
}
