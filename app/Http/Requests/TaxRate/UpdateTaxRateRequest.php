<?php
/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://opensource.org/licenses/AAL
 */

namespace App\Http\Requests\TaxRate;

use App\Http\Requests\Request;

class UpdateTaxRateRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() : bool
    {
        return auth()->user()->isAdmin();
    }

    public function rules()
    {
        return [
            // 'name' => 'unique:tax_rates,name,'.$this->tax_rate->name.',id,company_id,'.auth()->user()->companyId(),
            'name' => 'unique:tax_rates,name,'.$this->id.',id,company_id,'.$this->company_id,
            'rate' => 'numeric',
        ];
    }
}